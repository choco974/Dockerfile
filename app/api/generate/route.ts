import { streamText } from "ai"

export const maxDuration = 60

export async function POST(request: Request) {
  try {
    const { prompt, siteName, pageType, isModification, existingCode } = await request.json()

    const pagePrompts: Record<string, string> = {
      index: `Create a STUNNING 8K ULTRA HD professional homepage HTML5 for "${siteName}".
CLIENT DESCRIPTION: ${prompt}

MANDATORY 8K MULTIMEDIA STRUCTURE (minimum 900 lines):
- Full DOCTYPE + head with meta tags, Google Font Inter/Poppins, CSS variables
- Header with animated logo and navigation with hover effects
- HERO SECTION: Full-screen 8K video background with overlay (use video tag with autoplay, loop, muted)
  - Include placeholder for 8K video: https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27971-large.mp4
  - Animated gradient overlay
  - Animated text with typing effect
- 8K IMAGE GALLERY: Grid of high-res images with lightbox effect
  - CSS animations on hover (zoom, rotate, glow)
  - Lazy loading for performance
- ANIMATED STATS section with counting numbers
- FEATURES section with 6 animated cards (hover transform, glow effects)
- VIDEO SHOWCASE: Embedded video player with custom controls
- PARALLAX SCROLLING sections with 8K backgrounds
- ANIMATED TESTIMONIALS carousel
- FOOTER with animated social icons

CSS: 
- CSS animations (@keyframes): fadeIn, slideUp, pulse, glow, float, rotate3D
- 8K image optimization with object-fit
- Video player custom styling
- Glassmorphism effects
- Gradient animations
- Particle effects with CSS

JS: 
- Video player controls
- Image lightbox
- Parallax scroll effect
- Typing animation
- Counter animation
- Smooth scroll
- Intersection Observer for animations
- Mobile menu toggle

Return ONLY the complete HTML code starting with <!DOCTYPE html>. NO markdown, NO backticks.`,

      dashboard: `Create a STUNNING 8K ULTRA HD admin dashboard HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY 8K DASHBOARD (minimum 1000 lines):
- Fixed animated sidebar with glow effects
- Top header with animated search and profile avatar
- 4 ANIMATED stat cards with real-time counters and mini charts
- LIVE VIDEO FEED section with 4 video panels
- ANIMATED CHARTS section (CSS-only animated charts)
- 8K IMAGE GALLERY manager with drag-drop upload UI
- DATA TABLE with animated rows
- ACTIVITIES feed with live animations
- VIDEO ANALYTICS panel

CSS: 
- Dark theme with neon glow effects
- Animated gradients
- 8K image backgrounds
- Video thumbnail styling
- Chart animations
- Glassmorphism panels

JS: 
- Video player management
- Animated counters
- Table sorting
- Search filter
- Sidebar toggle
- Real-time clock

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      pricing: `Create a STUNNING 8K ULTRA HD pricing page HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY 8K PRICING (minimum 800 lines):
- HERO with 8K video background and animated title
- Monthly/Annual toggle with smooth animation
- 3 ANIMATED pricing cards (Starter, Pro, Enterprise)
  - Hover effects: transform, glow, particle burst
  - Animated feature checkmarks
- 8K FEATURE COMPARISON table with hover effects
- VIDEO TESTIMONIALS section
- ANIMATED FAQ accordion
- CTA with pulsing button and video background

CSS+JS: 
- Card flip animations
- Price counter animation
- Video backgrounds
- Parallax effects
- Accordion with smooth transitions

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      contact: `Create a STUNNING 8K ULTRA HD contact page HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY 8K CONTACT (minimum 750 lines):
- HERO with 8K animated background
- ANIMATED contact form with validation
  - Input focus animations
  - Submit button with loading animation
  - Success/error animations
- CONTACT INFO sidebar with animated icons
- INTERACTIVE MAP section (styled placeholder)
- VIDEO CALL scheduling section
- 8K TEAM gallery with hover effects
- ANIMATED FAQ section

JS: Complete form validation with animations

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      features: `Create a STUNNING 8K ULTRA HD features page HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY 8K FEATURES (minimum 850 lines):
- HERO section with 8K video background
- 12 ANIMATED features grid
  - Each card: icon animation, hover transform, glow
  - Staggered entrance animations
- HOW IT WORKS: 4 steps with animated connectors and video demos
- 8K IMAGE ADVANTAGES section with parallax
- ANIMATED comparison table
- INTEGRATIONS grid with animated logos
- VIDEO DEMO section with custom player
- SECURITY section with animated badges
- CTA with 8K background

CSS+JS: 
- Scroll-triggered animations
- Video player
- Parallax effects
- Counter animations

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,

      gallery: `Create a STUNNING 8K ULTRA HD media gallery HTML5 for "${siteName}".
DESCRIPTION: ${prompt}

MANDATORY 8K GALLERY (minimum 900 lines):
- HERO with video header
- FILTER TABS: All, Videos, Images, 8K Content
- MASONRY GRID gallery with:
  - 8K image thumbnails with zoom on hover
  - Video thumbnails with play button overlay
  - Lightbox modal for full-size viewing
  - Lazy loading
- VIDEO PLAYER modal with custom controls
- IMAGE SLIDESHOW with auto-play
- DOWNLOAD section
- ANIMATED pagination

CSS+JS:
- Masonry layout
- Lightbox functionality
- Video player controls
- Filter animations
- Infinite scroll simulation

Return ONLY HTML starting with <!DOCTYPE html>. NO markdown.`,
    }

    const modificationPrompt = `Modify the existing HTML code according to this request: "${prompt}"

CURRENT CODE TO MODIFY:
${existingCode?.substring(0, 6000)}

INSTRUCTIONS:
- Apply the requested modifications
- ADD 8K VIDEO and IMAGE support if not present
- ADD CSS animations if not present
- Keep the overall structure
- Improve with multimedia effects
- Minimum 700 lines of code

Return ONLY the complete modified HTML code starting with <!DOCTYPE html>. NO markdown.`

    const systemPrompt = `You are an ELITE 8K multimedia web developer specializing in high-resolution video and image integration.

ABSOLUTE RULES:
1. Generate ONLY professional, complete HTML5 code with 8K MULTIMEDIA support
2. NEVER use backticks or markdown formatting
3. ALWAYS start directly with <!DOCTYPE html>
4. INCLUDE 8K VIDEO: Use video tags with autoplay, loop, muted, playsinline
5. INCLUDE 8K IMAGES: High-res image placeholders with lazy loading
6. CSS ANIMATIONS: fadeIn, slideUp, pulse, glow, float, rotate3D, parallax
7. VIDEO BACKGROUNDS: Full-screen video sections
8. IMAGE GALLERIES: Lightbox, zoom effects, masonry layouts
9. Minimum 700 lines per page
10. Google Font Inter/Poppins mandatory
11. Use sample video URLs like: https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27971-large.mp4
12. Use sample image URLs like: https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=3840&q=100

You return ONLY raw HTML code with full 8K multimedia support, nothing else.`

    const userPrompt = isModification
      ? modificationPrompt
      : pagePrompts[pageType] || pagePrompts.index

    const result = streamText({
      model: "google/gemini-3-flash",
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.7,
      maxOutputTokens: 8000,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Generation failed",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
