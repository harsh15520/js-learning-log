# JavaScript Array Methods: `find`, `findIndex`, `some`, and `every`

## What I Practiced

- **`find()`**: Retrieves first element satisfying condition
- **`findIndex()`**: Returns index of first matching element
- **`some()`**: Checks if ANY element passes test
- **`every()`**: Verifies if ALL elements pass test

## Key Differences

| Method         | Returns          | Stops At First | Best For                          |
|----------------|------------------|----------------|-----------------------------------|
| `find()`       | Element value    | Match          | Retrieving objects from arrays    |
| `findIndex()`  | Index (number)   | Match          | Locating positions in arrays      |
| `some()`       | Boolean          | Match          | Checking existence (OR logic)     |
| `every()`      | Boolean          | Fail           | Validation (AND logic)            |

## When to Use

| Scenario                          | Method          | Example                          |
|-----------------------------------|-----------------|----------------------------------|
| Get first matching object         | `find()`        | `products.find(p => p.inStock)`  |
| Find position of match            | `findIndex()`   | `items.findIndex(i => i < 10)`   |
| Check if any item passes test     | `some()`        | `[1,2,3].some(x => x > 2)`      |
| Verify all items pass test        | `every()`       | `ages.every(age => age >= 18)`   |

## Code Examples
See [array_methods.js](./array_methods.js) for practical implementations.

## Key Takeaways
1. `find()` and `findIndex()` short-circuit at first match
2. `some()` returns `true` if at least one element passes
3. `every()` returns `true` only if all elements pass
4. All methods accept same arguments: `(element, index, array)`

## Best Practices
- Use descriptive callback function names
- Chain with other array methods like `filter()`/`map()`
- Handle empty arrays: `find()`→`undefined`, `findIndex()`→`-1`
<img width="1665" height="882" alt="Screenshot 2025-07-18 132619" src="https://github.com/user-attachments/assets/6a2555df-a5b0-400a-9137-160adbf6208b" />
