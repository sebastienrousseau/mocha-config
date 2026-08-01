<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./mocha-config.svg" alt="mocha-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/mocha-config</h1>

<p align="center">
  Shareable Mocha test runner configuration files and rules adhering to 2026 standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/mocha-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/mocha-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/mocha-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fmocha-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/mocha-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/mocha-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/mocha-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [BDD Test Execution Settings](#bdd-test-execution-settings) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/mocha-config

# pnpm
pnpm add -D @sebastienrousseau/mocha-config

# yarn
yarn add -D @sebastienrousseau/mocha-config

# bun
bun add -d @sebastienrousseau/mocha-config
```

---

## Quick Start

### In `package.json`

```json
{
  "mocha": "@sebastienrousseau/mocha-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/mocha-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/mocha-config";
export default config;
```

---

## BDD Test Execution Settings

Configured for BDD UI, spec reporter, recursive test discovery, and strict exception handling.

### Before (Unstandardized)

```javascript
// Default mocha setup without diffs
mocha.setup('bdd');
```

### After (@sebastienrousseau/mocha-config Enforced)

```javascript
// @sebastienrousseau/mocha-config
import mochaConfig from "@sebastienrousseau/mocha-config";
export default {
  ...mochaConfig,
  timeout: 5000
};
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/mocha-config.git
cd mocha-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
