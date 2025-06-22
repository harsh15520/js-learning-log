# Objects and Advanced Methods in JavaScript
## What I Practiced
- Logged objects created directly inside `console.log()` to see immediate output.
- Created a function that returns an object literal.
- Explored the difference between assigning objects to variables for reuse versus creating objects on the fly.
- Learned that two objects with identical properties are different because objects are compared by reference, not by value.
- Tested equality comparisons between objects stored in variables and newly created objects.
- Used `shift()` and `unshift()` to remove and add elements at the start of arrays.
- Created objects with nested objects and arrays as properties.
- Defined functions inside objects using both traditional and ES6 shorthand syntax.
- Looped through object properties using `Object.entries()` and `forEach`.
- Made shallow copies of objects using the spread operator `{...obj}` and `Object.assign()`.
- Explored immutability with `Object.freeze()` (no changes allowed) and `Object.seal()` (can change, but not add/remove properties).
- Built objects with constructor functions and ES6 class syntax.

## Code Examples

See [objects.js](./objects.js) for all my code and experiments.

## Reflection

I found it useful to see how freezing and sealing objects can help manage data integrity. The difference between copying objects with `{...obj}` and `Object.assign()` was clear, and I liked how constructor functions and classes can be used to create templates for objects. Looping over object properties with `Object.entries()` was also a neat trick for displaying key-value pairs.
I learned that even if two objects have the same properties and values, they are not equal unless they reference the exact same object in memory. Objects are compared by their reference, not their content. This is important to understand when comparing objects or using them as keys in data structures.

## Next Steps

- Practice with deeper object nesting and destructuring.
- Explore prototype inheritance and ES6 class features.
- Use objects in real mini-projects to reinforce these concepts.
![Screenshot 2025-06-20 214427](https://github.com/user-attachments/assets/6b0bfa5e-73a1-4707-adb4-a79c537a47b3)
