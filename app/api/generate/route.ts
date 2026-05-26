import { streamText } from "ai"

export const maxDuration = 60

export async function POST(request: Request) {
  try {
    const { prompt, siteName, pageType, isModification, existingCode } = await request.json()

    console.log("[v0] API generate called:", { siteName, pageType, isModification })

    const pagePrompts: Record<string, string> = {
      index: `Create a COMPLETE professional homepage HTML5 for "${siteName}".
CLIENT DESCRIPTION: ${prompt}

MANDATORY STRUCTURE (minimum 800 lines):
- Full DOCTYPE + head with meta tags, Google Font Inter, CSS variables
- Header with logo and navigation
- Hero section with animated gradient background
- Stats section with 4 counters
- Features section with 6 cards
- Testimonials with 3 reviews
- Partners section
- CTA section
- Footer with 4 columns

CSS: Complete styling with animations, responsive design
JS: Mobile menu, smooth scroll, counter animation

Return ONLY the complete HTML code starting with <!DOCTYPE html>. NO markdown, NO backticks.`,

      dashboard: `Create a COMPLETE admin dashboard HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY (minimum 900 lines):
- Fixed sidebar with menu items
- Top header with search and profile
- 4 stat cards with metrics
- Charts section
- Data table with pagination
- Activities feed

CSS: Dark theme, responsive sidebar
JS: Toggle sidebar, dropdowns, search filter

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      pricing: `Create a COMPLETE pricing page HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY (minimum 700 lines):
- Hero with pricing title
- Monthly/Annual toggle
- 3 pricing cards (Starter, Pro, Enterprise)
- Feature comparison table
- FAQ accordion
- CTA and footer

CSS+JS: Toggle pricing, accordion animations

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      contact: `Create a COMPLETE contact page HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY (minimum 650 lines):
- Contact form with validation
- Contact info sidebar
- Google Maps placeholder
- FAQ section
- Footer

JS: Complete form validation

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      features: `Create a COMPLETE features page HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY (minimum 750 lines):
- Hero section
- 12 features grid
- How it works section
- Advantages section
- Comparison table
- Integrations grid
- Security badges
- CTA and footer

CSS+JS: Animations, hover effects

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,
    }

    const modificationPrompt = `Modify the existing HTML code according to this request: "${prompt}"

CURRENT CODE TO MODIFY:
${existingCode?.substring(0, 6000)}

INSTRUCTIONS:
- Apply the requested modifications
- Keep the overall structure
- Improve where possible
- Minimum 600 lines of code

Return ONLY the complete modified HTML code starting with <!DOCTYPE html>. NO markdown.`

    const systemPrompt = `You are an elite full-stack web developer with 20 years of experience.

ABSOLUTE RULES:
1. Generate ONLY professional, complete HTML5 code
2. NEVER use backticks or markdown formatting
3. ALWAYS start directly with <!DOCTYPE html>
4. Complete CSS in <style> with variables, animations, responsive design
5. Functional JavaScript in <script>
6. Minimum 600 lines per page
7. Modern, professional design
8. Google Font Inter mandatory

You return ONLY raw HTML code, nothing else.`

    const userPrompt = isModification
      ? modificationPrompt
      : pagePrompts[pageType] || pagePrompts.index

    console.log("[v0] Calling AI model: openai/gpt-4o-mini")

    const result = streamText({
      model: "openai/gpt-4o-mini",
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.7,
      maxOutputTokens: 8000,
    })

    console.log("[v0] Stream started successfully")
    return result.toTextStreamResponse()
  } catch (error) {
    console.error("[v0] API generate error:", error)
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Generation failed",
        details: String(error)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
