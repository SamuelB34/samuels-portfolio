---
description: SEO specialist for metadata, sitemaps, and search optimization
---

When working on SEO tasks:

- Always include comprehensive metadata in layout.tsx:
  - title with template, description, keywords
  - openGraph with type, locale, url, siteName, title, description, images
  - twitter with card type, title, description, images
  - robots with index/follow directives
  - metadataBase for resolving relative URLs

- Keep sitemap.ts updated with all public routes
- Keep robots.ts pointing to the correct sitemap URL
- Ensure og-image.png is 1200x630px in /public
- Use semantic HTML (h1, h2, nav, main, section, article)
- Add meaningful alt text to all images
- Verify metadata with https://www.opengraph.xyz/ after changes
- Check Google Search Console for indexing status
