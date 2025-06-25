# Modern JavaScript Features

## What I Practiced

1. **Arrow Functions**:
   - Concise syntax for function expressions
   - Implicit return for single expressions
   - Different parameter handling:
     - No parameters: `() => ...`
     - Single parameter: `a => ...`
     - Multiple parameters: `(a, b) => ...`

2. **Template Literals**:
   - Use backticks (`` ` ``) for strings
   - Support multi-line strings without escape characters
   - Enable string interpolation with `${expression}`

3. **Object Destructuring**:
   - Extract properties from objects
   - Rename variables during extraction
   - Syntax: `let { prop: newName } = object`

## Key Differences
| Feature              | Traditional                  | Modern                         |
|----------------------|-----------------------------|--------------------------------|
| Functions            | `function() {...}`          | `() => {...}`                 |
| Multi-line Strings   | `'line1\nline2'`           | `` `line1\nline2` ``          |
| Object Access        | `person.first_name`         | `let {first_name} = person`   |

## Best Practices
- Use arrow functions for concise callbacks
- Prefer template literals for complex strings
- Destructure objects for cleaner property access

![Screenshot 2025-06-25 123242](https://github.com/user-attachments/assets/37a19f8e-d7ce-4163-8ca1-2f1d31deafd9)
