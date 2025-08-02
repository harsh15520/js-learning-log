# JavaScript Prototypes and Prototype Chain

## What I Practiced

- Attached methods to constructor function prototypes so methods are shared by all instances.
- Explored the prototype chain using `Object.getPrototypeOf`, `__proto__`, and `isPrototypeOf`.
- Checked properties with `hasOwnProperty` vs. prototype properties.
- Added shared properties and methods via prototypes after object creation.
- Used prototype chaining to implement inheritance between constructor functions.

## Key Concepts

| Concept                | Description                                                      |
|------------------------|------------------------------------------------------------------|
| Prototype              | An object from which another object inherits methods/properties   |
| Prototype Chain        | Series of links (objects) for property/method resolution         |
| Person.prototype       | Methods/properties shared by all Person instances                |
| Object.create(proto)   | Create new object inheriting from `proto`                        |
| hasOwnProperty         | Checks own vs inherited properties                               |

- **Prototypes** allow memory efficiency (one function shared by all) and dynamic extensibility.
- **Prototype Chain**: If a property/method isn’t found on the object, JS checks its prototype, then its prototype’s prototype, up to `Object.prototype`.<img width="1657" height="713" alt="Screenshot 2025-08-02 132433" src="https://github.com/user-attachments/assets/12dbbb90-fd9a-49c6-b5cf-16b654c190e3" />


## Code Samples

See [prototype_examples.js](./prototype_examples.js) for full code.

## Reflection

Prototypes make method sharing and inheritance efficient in JavaScript. The prototype chain ensures that objects only carry unique data, with shared functionality on prototypes. Using `Object.create()` and setting up `.constructor` accurately is vital for inheritance and avoiding bugs.

## Next Steps

- Practice further with ES6 class syntax and compare to prototype approach.
- Explore how built-in types (`Array`, `Date`) use prototypes.
- Try overriding prototype methods in child constructors.
<img width="1657" height="713" alt="Screenshot 2025-08-02 132433" src="https://github.com/user-attachments/assets/965c5169-8ba9-4d35-bb48-ee7ea7184aef" />
