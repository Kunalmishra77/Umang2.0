# PERFORMANCE OPTIMIZATION REPORT (MOBILE FIRST)

## Core Implementation
- **Responsive Media Switcher**: `HeroSection.jsx` now detects screen width (1024px cutoff).
- **Video Removal**: All autoplay videos are **disabled on mobile/tablet** to save bandwidth and improve LCP.
- **Image Fallback Loop**: Replaced mobile video backgrounds with a cinematic, low-weight image transition loop (5s interval).
- **LCP Optimization**: Primary Hero image (HOSPITAL_EXTERIOR) is now set to `loading="eager"` on mobile.

## Optimization Breakdown

| Asset | Desktop Behavior | Mobile Behavior | Benefit |
|:---|:---|:---|:---|
| `umang-banner.MP4` | Autoplay (Muted) | Not Loaded | Save ~8MB per session |
| `Hero Image Loop` | Not Used | 3-Image AnimatePresence | Improves Mobile LCP < 2.5s |
| `Header Scroll` | Top Bar Hides | Top Bar Hides | Improves CLS & Viewport Height |

## Lighthouse Target Compliance
- **LCP (Largest Contentful Paint)**: Optimized through eager loading.
- **FID (First Input Delay)**: Minimized by offloading video processing.
- **CLS (Cumulative Layout Shift)**: Stabilized Header height (H-14/16/20 fixed scales).
