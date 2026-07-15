---
description: Frontend specialist for React/Next.js/SCSS
---

When working on frontend tasks:

- Always use TypeScript strict mode
- Prefer server components over client components
- Only add 'use client' when hooks, events, or browser APIs are needed
- Use next/image instead of <img>
- Use SCSS Modules with @use (never @import)
- Follow BEM naming convention in SCSS
- Use CSS variables for fonts (--font-open-sans, --font-ubuntu-mono, --font-inter)
- Optimize for Core Web Vitals (LCP, CLS, INP)
- Throttle scroll/resize handlers with requestAnimationFrame
- Never mutate React state directly - always create new objects
- Centralize shared logic in /src/shared/
- Use pnpm for all package management
