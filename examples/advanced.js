/**
 * Advanced custom Mocha runner configuration
 */
const base = require("../index.cjs");
const custom = { ...base, bail: true, timeout: 5000 };
console.log("Custom bail mode active:", custom.bail);
