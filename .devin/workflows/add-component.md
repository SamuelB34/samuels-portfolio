---
description: Create a new component following project conventions
---

1. Before creating a new component, check `/src/shared/ui-kit/` for existing ones:
   - `SamButton` - styled button with loading/success states
   - `SamInput` - text input with error handling and validation display
   - `SamModal` - modal dialog wrapper
   - Reuse these instead of building new UI elements from scratch
   - Only create a new component if the existing ones truly don't fit

2. Create the component file in `src/app/_components/[name]/[Name].tsx`

3. Add `'use client'` directive ONLY if the component uses:
   - useState, useEffect, useRef, useReducer
   - Event handlers (onClick, onChange, etc.)
   - Browser APIs (document, window, etc.)
   - scrollToElement or other client-only functions

4. Create the SCSS module: `src/app/_components/[name]/[name].module.scss`

5. Use `@use` (never `@import`) for shared SCSS:
   ```scss
   @use 'src/shared/scss/_media-queries' as mq;
   ```

6. Use BEM naming convention in SCSS classes

7. Use `next/image` for all images (never `<img>`)

8. Use CSS variables for fonts:
   - `var(--font-open-sans)` for body text
   - `var(--font-ubuntu-mono)` for monospace/title accents
   - `var(--font-inter)` for UI elements

9. If the component needs scroll navigation, import from:
   ```ts
   import { scrollToElement } from '@/shared/functions/scrollTo'
   ```

10. Run the build to verify:
   // turbo
   ```bash
   pnpm build
   ```
