# Polymorphism in JavaScript (ES6 Classes)

## What I Practiced

- Built a base class (`Shape`) and child classes (`Circle`, `Rectangle`) implementing the same interface.
- Used method overriding for `area()` and `describe()` in each child class.
- Demonstrated polymorphism: same method called on different objects does different things.
- Looped through an array of shapes, calling shared methods with different results.
- Used functions that take any shape and work correctly due to polymorphism.

## Key Concepts

- **Polymorphism**: Same interface/method, different behavior depending on the object’s class.
- **Method Overriding**: Child class provides its own implementation of a method from the parent class.
- **Interface-like Pattern**: JS lacks formal interfaces but shared method names enable polymorphism.
- **Dynamic Dispatch**: The appropriate method is picked at runtime based on the object’s class.

## Practical Examples

- Array of heterogeneous shapes—each returns correct area/description.
- Generic functions (`printArea`) working with all shapes via a shared method signature.

## Code Samples

See [polymorphism_examples.js](./polymorphism_examples.js) for hands-on code.

## Reflection

Polymorphism lets me write code that works generically with many kinds of objects. Overriding `area()` in each shape subclass gives correct results, while shared functions operate flexibly over the entire "family" of shapes.

## Next Steps

- Try polymorphism with more complex hierarchies.
- Practice with polymorphic event handling or UI components.
- Explore “duck typing” in JS: if it walks and quacks like a duck, it’s usable!
<img width="1662" height="698" alt="Screenshot 2025-08-01 162110" src="https://github.com/user-attachments/assets/a96795be-35cd-4445-843f-34a1093dd140" />
