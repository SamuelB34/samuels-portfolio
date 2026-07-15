---
description: Project context and tech stack
---

Tech Stack:
- Next.js 15 (App Router)
- React 18
- TypeScript 5
- SCSS Modules with @use (not @import)
- pnpm as package manager
- next/font/google for fonts (Open Sans, Ubuntu Mono, Inter)

Architecture:
- page.tsx is a server component
- ScrollMain.tsx handles all client-side scroll/menu logic
- scrollToElement is centralized in shared/functions/
- Fonts loaded via next/font with CSS variables
- SEO: metadata in layout.tsx, sitemap.ts, robots.ts

Deployment:
- URL: https://dev.samuel-barragan.com
- Build command: pnpm build
- Dev command: pnpm dev

Key Decisions:
- Migrated from npm to pnpm
- Migrated Sass @import to @use
- Migrated from hardcoded fonts to next/font
- Converted page.tsx from client to server component
- Added requestAnimationFrame throttle to scroll handler
- Fixed state mutation bug in formValidations.ts
