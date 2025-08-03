# JavaScript Function Methods: call, apply, bind

## What I Practiced

- Used `.call()` to invoke functions with a chosen `this` context and comma-separated args.
- Used `.apply()` to invoke with a chosen `this` and an array of args.
- Used `.bind()` to permanently bind a function’s `this` and optionally preset arguments.
- Practiced method borrowing (using Array methods on array-like objects).
- Demonstrated partial function application using `bind`.
- Saw how to fix lost `this` (unbound method references).

## Key Concepts

| Method   | Invokes?      | Arguments           | `this` Context | Returns       |
|----------|---------------|--------------------|----------------|---------------|
| call     | Yes           | Comma-separated    | 1st arg        | Return value  |
| apply    | Yes           | Array              | 1st arg        | Return value  |
| bind     | No (binds)    | Comma (preset)     | 1st arg        | New function  |

- Use `.call()`/`.apply()` to execute functions with dynamic context/args immediately.
- Use `.bind()` to create pre-bound, reusable functions (helpful in callbacks, setTimeout, event listeners).

## Practical Examples

- Borrowing methods: Using array methods on array-like objects.
- Fixing lost `this`: For detached object methods or callbacks.
- Partial application: Pre-fix arguments for reusable utility functions.

## Reflection

Understanding call, apply, and bind is essential for advanced JavaScript—especially for callbacks, event handlers, and working with array-like structures like arguments or NodeLists. Using bind avoids “lost this” bugs in the browser and with libraries.

## Next Steps

- Practice with event listeners and setTimeout using bind.
- Explore call/apply with variadic utility functions.

See [call_apply_bind_examples.js](./call_apply_bind_examples.js) for hands-on code.
