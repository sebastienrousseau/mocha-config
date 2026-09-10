// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/mocha-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/mocha-config ===");
assert.strictEqual(config.ui, "bdd");
assert.strictEqual(config.recursive, true);
assert.strictEqual(config.diff, true);
assert.strictEqual(config.timeout, 10000);
assert(config.extension.includes("js") && config.extension.includes("ts"));

console.log("  ✓ UI interface: bdd");
console.log("  ✓ Recursive search: true");
console.log("  ✓ Timeout: 10000ms");
console.log("✅ 100% of mocha-config options and features validated.");
