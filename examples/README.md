# `@sebastienrousseau/mocha-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/mocha-config`.

---

## Example Suite Overview

| File | Type | Feature Coverage | Command |
| :--- | :--- | :--- | :--- |
| [`basic.js`](./basic.js) | CommonJS | Standard default configuration import | `node examples/basic.js` |
| [`advanced.js`](./advanced.js) | CommonJS | Custom extension and rule overrides | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs) | ES Module | Native ESM consumption via `import` | `node examples/esm.mjs` |
| [`features.js`](./features.js) | CommonJS | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **BDD Interface Preset**: Standard `describe` and `it` testing semantics (`ui: 'bdd'`)
- [x] **Recursive Discovery**: Traverses test subdirectories automatically (`recursive: true`)
- [x] **Colorized Diffs**: High-contrast diff display on test assertion failures (`diff: true`)
- [x] **Multi-Extension Support**: Executes .js, .ts, and .mjs test suites
- [x] **Generous Timeouts**: Prevents flaky asynchronous test failures (`timeout: 10000`)
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
