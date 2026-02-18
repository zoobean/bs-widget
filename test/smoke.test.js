import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

test("build output exists and exposes BSWidget", () => {
  const outputPath = "dist/bundle.js";

  assert.equal(existsSync(outputPath), true, "dist/bundle.js should exist");

  const bundleContent = readFileSync(outputPath, "utf8");
  assert.ok(bundleContent.length > 0, "dist/bundle.js should not be empty");
  assert.ok(
    bundleContent.includes("var BSWidget"),
    "bundle should expose BSWidget global"
  );
});