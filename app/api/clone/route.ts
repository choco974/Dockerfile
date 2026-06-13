export const maxDuration = 30

// REAL website cloning - fetches the actual live HTML source of a URL
export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    if (!url || typeof url !== "string") {
      return Response.json({ error: "URL is required" }, { status: 400 })
    }

    // Normalize the URL
    let target = url.trim()
    if (!/^https?:\/\//i.test(target)) {
      target = `https://${target}`
    }

    let parsed: URL
    try {
      parsed = new URL(target)
    } catch {
      return Response.json({ error: "Invalid URL" }, { status: 400 })
    }

    // Block private / internal hosts (SSRF protection)
    const host = parsed.hostname.toLowerCase()
    if (
      host === "localhost" ||
      host === "0.0.0.0" ||
      host.endsWith(".local") ||
      host.endsWith(".internal") ||
      /^127\./.test(host) ||
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^169\.254\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
    ) {
      return Response.json({ error: "Blocked host" }, { status: 403 })
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000)

    const res = await fetch(parsed.toString(), {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    }).finally(() => clearTimeout(timeout))

    if (!res.ok) {
      return Response.json(
        { error: `Target returned ${res.status}` },
        { status: 502 },
      )
    }

    const contentType = res.headers.get("content-type") || ""
    if (!contentType.includes("html")) {
      return Response.json(
        { error: `Unsupported content-type: ${contentType || "unknown"}` },
        { status: 415 },
      )
    }

    let html = await res.text()

    // Rewrite relative asset URLs to absolute so the clone renders correctly
    const origin = parsed.origin
    const base = parsed.toString().replace(/[^/]*$/, "")
    html = html
      .replace(/(href|src)=(["'])\/\/(.*?)\2/gi, `$1=$2${parsed.protocol}//$3$2`)
      .replace(/(href|src)=(["'])\/(?!\/)(.*?)\2/gi, `$1=$2${origin}/$3$2`)
      .replace(
        /(href|src)=(["'])(?!https?:|data:|mailto:|tel:|#|\/\/)(.*?)\2/gi,
        `$1=$2${base}$3$2`,
      )

    // Inject a <base> tag so any remaining relative references resolve
    if (/<head[^>]*>/i.test(html)) {
      html = html.replace(/<head([^>]*)>/i, `<head$1><base href="${base}">`)
    }

    const title =
      html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || parsed.hostname

    return Response.json({
      url: parsed.toString(),
      title,
      html,
      bytes: html.length,
      lines: html.split("\n").length,
    })
  } catch (error) {
    const message =
      error instanceof Error && error.name === "AbortError"
        ? "Request timed out"
        : error instanceof Error
          ? error.message
          : "Clone failed"
    return Response.json({ error: message }, { status: 500 })
  }
}
