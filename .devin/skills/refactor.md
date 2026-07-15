---
description: Refactor code for better structure and maintainability
---

1. Identify the code to refactor and its dependencies

2. Check for duplicated logic that can be centralized

3. Extract reusable logic into:
   - `/src/shared/functions/` for utility functions
   - `/src/shared/ui-kit/` for reusable UI components
   - `/src/shared/scss/` for shared SCSS mixins and variables

4. Before creating new components, check `/src/shared/ui-kit/` for existing ones:
   - `SamButton` - styled button with loading/success states
   - `SamInput` - text input with error handling and validation display
   - `SamModal` - modal dialog wrapper
   - Reuse these instead of building new UI elements from scratch
   - Only create a new ui-kit component if the existing ones truly don't fit the use case

5. Simplify state management:
   - Replace useState + useEffect with derived values when possible
   - Move state up only when needed for sibling communication
   - Use useRef for values that don't trigger re-renders

6. Improve type safety:
   - Replace `any` with proper types
   - Add interfaces for all component props
   - Use union types instead of strings for known values

7. Verify the refactor doesn't change behavior:
   // turbo
   ```bash
   pnpm build
   ```

8. Check for unused imports, variables, and dead code
