# Variable Scoping in JavaScript (`var` vs `let`)

## What I Demonstrated
1. **`var` characteristics**:
   - Function-scoped (not block-scoped)
   - Allows redeclaration in same scope
   - Hoisted (declaration moved to top, initialized as `undefined`)
   - Accessible outside blocks (e.g., `if` statements)

2. **`let` characteristics**:
   - Block-scoped ({ } creates new scope)
   - Disallows redeclaration in same scope
   - Not hoisted in same way (temporal dead zone)
   - Not accessible outside blocks

## Key Findings
- `var` declarations are accessible throughout their function, regardless of block boundaries
- `let` declarations are confined to their block ({ })
- Redeclaring `var` variables is allowed, but causes confusion
- Attempting to redeclare `let` variables throws an error
- Hoisting affects `var` (initialized as `undefined`), but `let` is uninitialized until declaration

## Code Examples
See [scoping.js](./scoping.js) for runnable examples.

## Best Practices
- Prefer `let` over `var` to avoid unintended scope leaks
- Use blocks ({ }) to limit variable visibility
- Declare variables at top of scope to avoid hoisting surprises
![Screenshot 2025-06-25 095141](https://github.com/user-attachments/assets/5df23af1-1f55-4866-8a04-f0b1a31d2358)
