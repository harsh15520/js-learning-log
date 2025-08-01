# Encapsulation in JavaScript

## What I Practiced

- Used closures to create private variables within constructor functions.
- Leveraged ES2022+ private class fields (`#field`) for true class-level privacy.

## Key Concepts

| Technique               | Syntax/Behavior                                      | Privacy           |
|-------------------------|------------------------------------------------------|-------------------|
| Closures (Classic)      | Variables declared in function, accessible to methods| Function-level    |
| Class Private Fields    | Prefix with `#` in ES2022+ classes                   | Class-level       |

- **Encapsulation**: Restricting direct access to some of an object’s data or methods for data hiding and integrity.
- **Private Fields** (`#field`): Modern, true privacy in JS classes.

## Practical Examples

- BankAccount: Only methods can access/update `balance`, users can’t see it directly.
- Employee: Salary stays fully private via `#salary`.

## Reflection

I learned how JavaScript supports encapsulation both with closures (classic) and with the new private class fields. Using getters/setters makes it easier to maintain invariants, and private fields provide true protection from outside access.

## Next Steps

- Practice combining encapsulation with inheritance.
- Explore module patterns for privacy across files.
- Refactor earlier code to use private fields where appropriate.

See [encapsulation_examples.js](./encapsulation_examples.js) for full, runnable examples.
<img width="1666" height="847" alt="Screenshot 2025-08-01 183314" src="https://github.com/user-attachments/assets/5506c635-ff15-47e0-a408-e94362f47b9d" />
