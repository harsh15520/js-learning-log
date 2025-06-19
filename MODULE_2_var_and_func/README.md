# Variables in JavaScript

## What I Practiced
- JavaScript is dynamically typed, so variables can change type at runtime.
- Used `var`, `let`, and `const` for variable declarations.
- Strings can use single or double quotes—both work fine as long as you’re consistent.
- Learned that using `name` as a variable is deprecated in browsers because of the built-in `window.name` property, which can cause conflicts.

## Code Examples
See [variables.js](./variables.js) for my code.

## Reflection
I found it interesting that using `var` is not recommended in modern JS. Also, uninitialized variables are `undefined` by default.I tried using `let name = "Alex"`, but VS Code warned me it’s deprecated. I researched and found it’s due to `window.name`. Now, I’ll avoid using `name` for variables.

