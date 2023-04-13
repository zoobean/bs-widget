import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/main.js",
  output: [
    {
      name: "BSWidget",
      file: "dist/bundle.js",
      format: "iife",
    },
  ],
  plugins: [resolve(), babel({ babelHelpers: "bundled" })],
};
