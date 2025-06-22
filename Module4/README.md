# JavaScript Hoisting Behavior

## What I Demonstrated
1. **Function expression hoisting**: 
   - `add` function called before assignment → works because `var` declaration is hoisted (but assignment isn't)
   - Output: `output1 5`

2. **`var` hoisting**:
   - `first_name` accessed before declaration → `undefined`
   - Output: `output2 undefined`

3. **`let` hoisting (Temporal Dead Zone)**:

`output3` would throw `ReferenceError`
   - Proves `let` declarations aren't initialized until execution

4. **Function declaration hoisting**:
   - `subtract()` works before declaration
   - Output: `-1` (from function) then `output4 undefined` (from console.log)

5. **Function expression hoisting**:
   - `multiply` called before assignment → `TypeError` (not a function)
   - Because `var multiply` is hoisted as `undefined`

## Key Learnings
- `var`: Hoisted and initialized as `undefined` 
- `let`/`const`: Hoisted but remain uninitialized (TDZ)
- Function declarations: Fully hoisted 
- Function expressions: Follow variable hoisting rules 
![Screenshot 2025-06-22 131234](https://github.com/user-attachments/assets/50315b6d-4ca2-431c-b436-7fbd104ab130)

