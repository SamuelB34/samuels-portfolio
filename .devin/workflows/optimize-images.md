---
description: Optimize and convert images to modern formats
---

1. Check all images in `/public` for optimization opportunities

2. For SVG files, verify they are minified (no editor metadata)

3. For raster images (PNG, JPG):
   - Convert to WebP or AVIF if possible
   - Ensure OG image is 1200x630px
   - Compress without visible quality loss

4. Replace any `<img>` tags with `next/image` `<Image />` component

5. Verify all `<Image />` components have meaningful `alt` text

6. Run the build to verify everything works:
   // turbo
   ```bash
   pnpm build
   ```
