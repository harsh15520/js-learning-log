# Reading Files Synchronously in Node.js

## What I Practiced

- Used Node’s `fs.readFileSync()` method to read a file synchronously.
- Noted that code execution stops until the file is completely read (`blocking` behavior).
- Compared synchronous and asynchronous reading and saw why blocking can sometimes be useful or harmful.
- Used Node’s `fs.readFile()` method for non-blocking file reading.
- Provided a callback to handle file content or errors.

## Key Concepts

- **Synchronous File Reading**:
  - `fs.readFileSync(path, encoding)` blocks the event loop until file reading is complete
  - Data is available immediately after the call.
  - Use for small files, configs, or during startup—not recommended for web servers or large files due to performance impact.
- **Return Value**:
  - Returns a string (if encoding set) or a Buffer (default).
- **Error Handling**:
  - Wrap in `try/catch` to gracefully handle missing files or read errors.
- **Asynchronous File Reading**
  - `fs.readFile(path, encoding, callback)` starts reading, returns immediately, then calls the callback with data or error.
  - Non-blocking: Other code runs while files are loading.
  - Good for web servers, command-line tools, or any production app.
- **Callback Parameters**
  - `err`—Error object (e.g., if file is missing). Check before using the data.
  - `data`—The file’s content as a string (with encoding) or Buffer (default).

## Best Practices

- Always specify encoding when reading text files to get a string instead of a Buffer object.
- Avoid synchronous reads in production or performance-critical code—they block the whole program
- Prefer asynchronous alternatives (`fs.readFile`) for responsive applications.
- Always check `err` before using the data in callbacks
- Prefer async methods for any responsive or scalable application.
- Avoid blocking the event loop with synchronous operations except for startup/config tasks.

## Next Steps

- Try reading JSON or binary files synchronously.
- Learn about reading files asynchronously with callbacks, Promises, or async/await.
- Benchmark sync vs async reading for different use-cases.
