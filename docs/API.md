# `@sebastienrousseau/mocha-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/mocha-config`.

---

## Description
Shareable Mocha test runner configuration with BDD assertions and comprehensive timeout bounds.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/mocha-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. BDD Interface Preset
- **Description**: Standard `describe` and `it` testing semantics (`ui: 'bdd'`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Recursive Discovery
- **Description**: Traverses test subdirectories automatically (`recursive: true`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Colorized Diffs
- **Description**: High-contrast diff display on test assertion failures (`diff: true`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Multi-Extension Support
- **Description**: Executes .js, .ts, and .mjs test suites
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Generous Timeouts
- **Description**: Prevents flaky asynchronous test failures (`timeout: 10000`)
- **Scope**: Production & Development
- **Status**: Stable & Active

