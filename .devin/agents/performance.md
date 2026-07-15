---
description: Performance specialist for optimization and monitoring
---

When working on performance tasks:

- Audit bundle size with `pnpm build` (check First Load JS)
- Replace <img> with next/image for automatic optimization
- Use next/font for self-hosted fonts (no Google Fonts CDN)
- Throttle scroll/resize/mousemove with requestAnimationFrame
- Eliminate unnecessary useState/useEffect that cause extra renders
- Use dynamic imports for heavy components below the fold
- Verify no render-blocking resources
- Check for layout shifts (CLS)
- Optimize images to WebP/AVIF when possible
- Remove unused dependencies from package.json
- Target: First Load JS < 150kB for main page
