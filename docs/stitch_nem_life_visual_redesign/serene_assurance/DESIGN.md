---
name: Serene Assurance
colors:
  surface: '#fff8f7'
  surface-dim: '#edd4d4'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#ffe9e8'
  surface-container-high: '#fbe2e2'
  surface-container-highest: '#f5dddd'
  on-surface: '#251819'
  on-surface-variant: '#584141'
  inverse-surface: '#3b2d2d'
  inverse-on-surface: '#ffedec'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#272727'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d3d3d'
  on-tertiary-container: '#a9a7a7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fff8f7'
  on-background: '#251819'
  surface-variant: '#f5dddd'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1100px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

The design system is built on a "Human-Centric OS" aesthetic, prioritizing a calm, guided onboarding experience reminiscent of premium operating system setup screens (macOS/Windows). It moves away from high-density SaaS patterns toward a spacious, editorial approach that fosters trust and reduces cognitive load during sensitive financial and life planning.

The visual style is a blend of **Glassmorphism** and **Corporate Modernism**. It utilizes large, soft-edged containers, layered transparency, and subtle background blurs to create a sense of depth and focus. The emotional goal is to evoke a feeling of "guarded tranquility"—where the user feels protected by a sophisticated, professional system that speaks in a clear, conversational tone.

Key motifs include:
- **Protection Rings:** Subtle, circular gradients behind main content cards.
- **Connected Pathways:** Soft, organic lines that guide the eye between steps.
- **Layered Clarity:** Using varying levels of transparency to establish hierarchy without using heavy shadows.

## Colors

The palette is anchored by **Burgundy (#800020)**, used for primary actions and brand presence. It conveys authority and deep-rooted stability. **Gold (#D4AF37)** is reserved exclusively for moments of progress, achievement, and positive feedback (e.g., a "Protection Score" or completed milestones).

The background uses **Warm White (#FDFCFB)** to maintain a soft, paper-like quality that is easier on the eyes than pure white. Typography is set in **Deep Charcoal (#2D2D2D)** to ensure high legibility while remaining softer than pure black.

For the five protection categories, a muted, desaturated secondary palette is used. These colors act as "tags" or soft background washes behind specific category icons, ensuring the UI remains colorful but never overwhelming or loud.

## Typography

This design system uses **Manrope** for headlines to provide a modern, geometric, and trustworthy structure. Large display sizes use a tighter letter-spacing to mimic high-end editorial layouts.

**Plus Jakarta Sans** is used for body copy and UI labels. Its slightly rounded terminals and open apertures provide a welcoming, friendly character that balances the seriousness of the Burgundy color palette.

The type scale is intentionally generous. For onboarding flows, "Body-MD" (18px) is the standard for conversational text to ensure maximum readability for all age demographics. Labels are kept small but bold with increased tracking for clear categorization.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for the central onboarding experience, centering a large "Action Card" (max 1100px) on the screen to focus the user's attention.

- **Desktop:** A 12-column grid with wide 64px margins. Content is typically centered in a 6-8 column span for readability.
- **Mobile:** A 4-column fluid grid with 20px margins.
- **Rhythm:** An 8px base unit drives all spacing. For the "OS setup" feel, vertical gaps between sections are intentionally large (80px+) to allow the background motifs and "Protection Rings" to be visible.

Padding within cards is generous (typically 40px on desktop) to ensure the interface never feels "cramped" or "transactional."

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Glassmorphism** rather than traditional heavy shadows.

- **Level 0 (Base):** Warm White (#FDFCFB) background with soft gradient "Protection Rings" in muted burgundy and gold.
- **Level 1 (Main Cards):** White containers with 60% opacity and a 20px backdrop blur. This creates the "OS setup" feel, allowing background colors to peek through subtly.
- **Level 2 (Active Elements):** For focused inputs or active steps, use a thin 1.5px solid border in the Primary color or a very soft, diffused ambient shadow (Color: Primary, Blur: 30px, Opacity: 5%).
- **Separators:** Use low-opacity primary color lines (10%) instead of gray to maintain the warm, premium tone.

## Shapes

The design system utilizes **Rounded** corners to reinforce the "calm and human" brand personality. 

- **Primary Cards:** 24px (rounded-xl) to create a soft, friendly containment.
- **Buttons and Inputs:** 12px-16px (rounded-lg) to provide a modern, tactile feel.
- **Progress Indicators:** Fully rounded (pill-shaped) to represent smooth, continuous movement.

The generous radii help differentiate this product from traditional, sharp-edged "financial" or "insurance" templates.

## Components

### Buttons
- **Primary:** Solid Burgundy (#800020) with white text. High-contrast, 16px radius, minimal padding (16px 32px).
- **Secondary:** Transparent background with a Burgundy outline (1.5px) or a soft Gold wash for "Achievement" actions.
- **Ghost/Back:** Simple text link with a small chevron, using the Charcoal color at 60% opacity.

### Cards
Onboarding cards should feature a header area with a "Step X of Y" label. Use a vertical layout for content: Header -> Illustration/Icon -> Question -> Input -> Navigation.

### Progress Indicators
Avoid standard "thin" bars. Use a "Segmented Pathway" approach—a series of connected soft-gold nodes that illuminate as the user progresses. The active segment should have a soft outer glow.

### Input Fields
Inputs should feel integrated. Use a soft background color (#F7F5F2) with a 1.5px border that transitions to Burgundy upon focus. Include clear "Optional" or "Required" micro-copy in the Label-Bold style.

### Protection Chips
Small, pill-shaped indicators for the 5 protection areas. These use the muted secondary palette background with a darker version of the same hue for the text.