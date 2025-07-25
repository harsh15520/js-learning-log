# The `this` Keyword in JavaScript

## What I Practiced

- Explored `this` in global scope, functions, objects, constructors, and with arrow functions.
- Tested `this` in Node.js (strict and non-strict mode) and browser environments.

## Key Findings

| Scenario                     | Value of `this`                           |
|------------------------------|-------------------------------------------|
| Global (Browser)             | `window`                                  |
| Global (Node.js)             | `{}` (module.exports)                     |
| Standalone function (non-strict)    | Global object (window/global)            |
| Standalone function (strict)        | `undefined`                              |
| Object method                | The object itself                         |
| Arrow function method        | Lexical (outer) scope                     |
| Constructor function         | The new instance being constructed        |
| DOM event handler (Browser)  | The element receiving the event           |

## Practical Examples

- Regular vs. arrow function: Arrow functions do not have their own `this`.
- In strict mode, unbound `this` is `undefined`, making bugs more obvious.
- In browser event handlers, `this` refers to the element triggering the handler.
- In Node.js, global-scope `this` is not the same as the real global object (`global`).

## Code Samples

See [this_keyword_examples.js](./this_keyword_examples.js) for hands-on code.

## Reflection

Understanding `this` is critical for object-oriented JavaScript. Surprises include how arrow functions inherit `this` and how strict mode changes default behaviors.

## Best Practices

- Use arrow functions for callbacks when you want lexical `this`.
- Rely on object methods for dynamic `this`.
- Always declare strict mode in modern JS for predictable `this`.
