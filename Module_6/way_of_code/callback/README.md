# Callback Functions in JavaScript

## What I Practiced

- **Synchronous Callbacks:** Functions called immediately within another function (e.g., `forEach`, custom functions).
- **Asynchronous Callbacks:** Functions called after an operation completes (e.g., `setTimeout`, data fetching).
- **Higher-Order Functions:** Functions that take other functions as arguments (e.g., `calculate(a, b, operation)`).

## Key Concepts

- **Callback Function:** A function passed as an argument to another function and called after a task is completed.
- **Synchronous Callback:** Called right away, e.g., `forEach`, custom callback in a function.
- **Asynchronous Callback:** Called later, after an event or async operation, e.g., `setTimeout`, AJAX, event listeners.
- **Benefits:** Control execution order, handle async operations, modular code

## Code Examples

See [callbacks.js](./callbacks.js) for hands-on code.

## Why Use Callbacks?

- To control function execution order
- To handle asynchronous events (timers, network requests, event handlers)
- To make code more modular and reusable

## Best Practices

- Name your callback functions descriptively.
- Avoid "callback hell" by keeping nesting shallow or using Promises/async-await for complex flows.
- Always check for errors in async callbacks (error-first pattern).

## Next Steps

- Practice with callbacks in event listeners and AJAX requests.
- Learn about Promises and async/await as modern alternatives to callback hell.
<img width="1652" height="899" alt="Screenshot 2025-07-17 175618" src="https://github.com/user-attachments/assets/6c0ff8b0-7ae3-4f34-b834-15b129744bac" />
