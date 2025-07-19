# JavaScript Array `filter()` Method

## What I Practiced

- Used `filter()` to create new arrays based on test conditions.
- Filtered numbers, objects, and strings with various criteria.
- Used `thisArg` to provide context for callback functions.
- Ensured the original array was not mutated after filtering.

## Key Concepts

- **filter()** creates a new array with elements that pass a test provided by a function.  
- The original array is **not changed** (non-mutating).
- The callback function receives three arguments: `currentValue`, `index`, and the array itself
- `filter()` skips empty elements in sparse arrays
- Returns an **empty array** if no elements pass the test

## Practical Examples

- Filtering adults from an array of ages
- Extracting even numbers from a list
- Selecting objects by property value (e.g., skill)
- Filtering values within a numeric range using `thisArg`
- Searching for substrings in an array of strings

## Common Mistakes

- Not returning a boolean from the callback[5].
- Accidentally mutating the original array (filter does **not** mutate).
- Forgetting to handle empty arrays (result is just `[]`).

## Code Examples

See [filter_examples.js](./filter_examples.js) for hands-on code.

## Next Steps

- Practice chaining `filter()` with `map()` and `reduce()`.
- Use `filter()` for real-world data validation and search features.
- Explore performance with large arrays.
  <img width="1657" height="821" alt="Screenshot 2025-07-19 104730" src="https://github.com/user-attachments/assets/9bc19d00-ee84-437c-a9d2-f8ff199534b7" />
