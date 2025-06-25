# JavaScript Modules and Modularity

## What I Practiced

- Broke code into separate modules for math utilities and messages.
- Used `export` and `import` to share code between files.
- Used both named and default exports.

## Code Examples

- **math.js**: Exports `sum` and `subtract` functions.
- **message.js**: Exports a default function for greetings.
- **main.js**: Imports both modules and uses their features.

## Key Learnings

- Modules help organize code, avoid global namespace pollution, and improve maintainability[3][6][7].
- Named exports allow selective import; default exports allow importing with any name.
- Only scripts with `type="module"` can use `import`/`export`.
- Modern browsers and build tools (like Webpack) support modules natively.

## Next Steps

- Try importing all exports as an object: `import * as math from './math.js'`
- Explore dynamic imports and modulepreload for performance.
- Practice modularizing a larger app.
