import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "sort-imports": "error",
    },
  },
  globalIgnores([".astro/*"]),
];
