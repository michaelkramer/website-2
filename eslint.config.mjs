import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import * as importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "@typescript-eslint/no-explicit-any": "off",
    },
    ignores: ["public", ".github", ".react-router", "dist", "node_modules"],
  },
  eslintPluginPrettierRecommended,
);
