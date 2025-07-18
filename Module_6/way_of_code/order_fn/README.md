# Higher Order Functions: `map` and `forEach` in JavaScript

## What I Practiced

- Used `forEach()` to iterate over arrays and perform actions for each element.
- Used `map()` to create new arrays by transforming each element.
- Compared how `forEach` and `map` handle return values and mutation.
- Explored practical use-cases for both methods.

## Key Concepts

| Function   | Returns New Array? | Mutates Original? | Typical Use Case           |
|------------|-------------------|-------------------|----------------------------|
| forEach    | ❌ (undefined)     | Can (if mutated)  | Side effects (logging, DOM)|
| map        | ✅ (new array)     | No (unless mutated in callback) | Data transformation        |

- **forEach:** Executes a callback for each array element. Does not return a new array. Can mutate the original array if modified inside the callback
- **map:** Returns a new array with the result of calling the callback on every element. Does not mutate the original array unless you intentionally do so in the callback

## Code Examples

See [hof_examples.js](./hof_examples.js) for hands-on code.

## Reflection

I learned that `map` is best for transforming data and returning new arrays, while `forEach` is for running effects (like logging or updating the DOM). Accidentally mutating arrays inside callbacks can lead to bugs, so it’s important to use these methods intentionally.

## Next Steps

- Practice with `filter`, `reduce`, and other higher-order array methods.
- Refactor older loops to use `map` or `forEach` for clarity.
<img width="1659" height="959" alt="Screenshot 2025-07-18 110134" src="https://github.com/user-attachments/assets/179b701b-6752-46ab-adfd-a4ca6632ca7f" />
