---
description: Write tests for components and utilities
---

1. Identify what needs testing:
   - Utility functions (formValidations, scrollTo)
   - Component rendering and interactions
   - Form submission flow

2. Use Vitest + React Testing Library for component tests

3. For utility functions, test edge cases:
   - Empty inputs
   - Invalid email formats
   - Boundary values

4. For components, test:
   - Renders without crashing
   - Props are displayed correctly
   - User interactions trigger expected callbacks
   - State changes reflect in UI

5. Mock browser APIs (scrollIntoView, requestAnimationFrame) in tests

6. Run tests:
   // turbo
   ```bash
   pnpm test
   ```
