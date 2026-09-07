---
title: "Usage — @sebastienrousseau/mocha-config"
description: "How to use and configure @sebastienrousseau/mocha-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/mocha-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/mocha-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/mocha-config";
export default config;
```

## In `package.json`

```json
{
  "mocha": "@sebastienrousseau/mocha-config"
}
```
