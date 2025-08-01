# Inheritance & Method Inheritance in JavaScript (ES6 Classes)

## What I Practiced

- Built a class inheritance chain: Animal → Dog → GuideDog.
- Used `extends` and `super()` for class inheritance and constructor chaining.
- Inherited base methods (`info`) and selectively overrode (`speak`).
- Combined inherited, overridden, and new methods in subclasses.

## Key Concepts

- **Inheritance:** Child classes extend parent classes, acquiring properties and methods.
- **super():** Used to call parent class constructor or methods.
- **Method Inheritance:** Subclasses use parent methods unless they override them.
- **Overriding:** Subclass can redefine a parent method with same name/signature.
- **Multi-level Inheritance:** Chains can extend multiple levels (grandparent → parent → child).

## Practical Examples

- Base methods (like `info`) can be used by any subclass unless overridden.
- Overriding a parent’s method allows you to specialize behavior (Dog’s `speak()` vs. Animal’s `speak()`).
- Each subclass can add its own unique methods (like `GuideDog`’s `guide()`).

## Code Samples

See [inheritance_examples.js](./inheritance_examples.js) for runnable code.

## Reflection

Learning how `extends` and `super()` work helped me understand class relationships. Inheriting methods reduces code duplication, while overrides allow customization. Testing both new and inherited methods for each subclass provided insight into proper class design.

## Next Steps

- Practice with more complex inheritance chains and method overriding.
- Explore calling parent methods inside overridden methods (e.g., `super.speak()`).
- Experiment with mixins for horizontal inheritance.
<img width="1649" height="878" alt="Screenshot 2025-08-01 141017" src="https://github.com/user-attachments/assets/ef40b84f-e429-4af2-bd90-866745b09279" />
