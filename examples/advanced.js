// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom Mocha runner configuration
 */
const base = require("../index.cjs");
const custom = { ...base, bail: true, timeout: 5000 };
console.log("Custom bail mode active:", custom.bail);
