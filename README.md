# Vite + Vitest + AG Grid

A modern React starter project demonstrating AG Grid integration with comprehensive testing using Vitest and React Testing Library.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities
- **AG Grid Community** - Feature-rich data grid
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

## Project Structure

```text
src/
├── ag-grid/
│   ├── simple.tsx       # Basic AG Grid example
│   └── simple.test.tsx  # Tests using getByRole and best practices
└── sum/
    ├── sum.ts
    └── sum.test.ts
```

## Example: Simple AG Grid Component

See [src/ag-grid/simple.tsx](src/ag-grid/simple.tsx) for a basic AG Grid implementation with:

- Column definitions
- Row data
- Default column configuration
- TypeScript types

## Testing Best Practices

The test suite demonstrates React Testing Library best practices:

- Using `getByRole` for semantic queries
- Using `within()` for scoped queries
- Proper async handling with `findBy*` queries
- Testing accessibility through ARIA roles

See [src/ag-grid/simple.test.tsx](src/ag-grid/simple.test.tsx) for examples.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
