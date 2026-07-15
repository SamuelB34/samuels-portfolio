---
description: Review code for bugs, performance, and best practices
---

1. Check for TypeScript errors and ESLint warnings

2. Verify no direct state mutations (never mutate React state without setState)

3. Check for unnecessary re-renders:
   - useState that could be derived from props
   - useEffect that could be computed inline
   - State that duplicates parent state

4. Verify 'use client' directives:
   - Present on components using hooks, events, or browser APIs
   - Absent on components that can be server components

5. Check for accessibility:
   - All images have meaningful alt text
   - Interactive elements have proper roles
   - Color contrast meets WCAG standards

6. Verify no duplicated code (functions, components, logic)

7. Check for performance issues:
   - Scroll/resize handlers have throttling (requestAnimationFrame)
   - No unnecessary dependencies in useEffect arrays
   - Images use next/image instead of <img>

8. Report findings categorized by severity: Critical, High, Medium, Low
