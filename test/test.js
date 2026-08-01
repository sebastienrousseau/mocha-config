const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/mocha-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert.strictEqual(cjsConfig.ui, "bdd");
  assert.strictEqual(cjsConfig.diff, true);

  const esmModule = await import("../index.mjs");
  const esmConfig = esmModule.default;
  assert(esmConfig && typeof esmConfig === "object", "ESM config must be an object");
  assert.strictEqual(esmConfig.ui, "bdd");

  console.log("✅ mocha-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
