---
description: Deploy the portfolio to production
---

1. Verify the build passes:
   // turbo
   ```bash
   pnpm build
   ```

2. Check that `og-image.png` exists in `/public`

3. Check that `robots.ts` and `sitemap.ts` are present in `src/app/`

4. Verify environment variables are set (if any)

5. Deploy the app using your hosting provider (Vercel, Netlify, etc.)

6. Verify the site is live at https://dev.samuel-barragan.com

7. Test OpenGraph metadata using https://www.opengraph.xyz/

8. Verify `/robots.txt` and `/sitemap.xml` are accessible
