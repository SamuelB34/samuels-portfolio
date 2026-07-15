---
description: Project architecture rules
---

Structure:
- /src/app/ - Next.js App Router pages and layouts
- /src/app/_components/ - Page-specific components
- /src/shared/ - Shared code across the app
  - /functions/ - Utility functions (scrollTo, etc.)
  - /ui-kit/ - Reusable UI components (SamInput, SamButton, SamModal)
  - /scss/ - Shared SCSS (_media-queries, _variables)
- /public/ - Static assets (images, SVGs, og-image.png)

Rules:
- page.tsx should be a server component when possible
- Client-side logic goes in dedicated client components (e.g., ScrollMain)
- scrollToElement is centralized in /src/shared/functions/scrollTo.ts
- Never duplicate utility functions across components
- SCSS uses @use with namespaces (mq for media-queries, v for variables)
- Variables in _variables.scss must not use $-- prefix (Sass private)
- Forms use formValidations.ts for validation logic
- State mutations are forbidden - always create new objects
