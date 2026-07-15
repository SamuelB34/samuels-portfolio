---
description: Build the portfolio project
---

1. Install dependencies:
   // turbo
   ```bash
   pnpm install
   ```

2. Run the build:
   // turbo
   ```bash
   pnpm build
   ```

3. Verify no errors in the output (warnings are acceptable)

4. If there are TypeScript errors, fix them before proceeding

5. If the build fails due to stale cache, clean and rebuild:
   // turbo
   ```bash
   rm -rf .next && pnpm build
   ```
