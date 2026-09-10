// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Modern Mocha CommonJS Configuration
 */
module.exports = {
  allowUncaught: false,
  bail: false,
  delay: false,
  diff: true,
  exit: true,
  extension: ["js", "ts", "mjs", "cjs"],
  package: "./package.json",
  recursive: true,
  reporter: "spec",
  slow: 75,
  spec: ["test/**/*.test.js", "test/**/*.spec.js", "__tests__/**/*"],
  timeout: 10000,
  ui: "bdd",
};
