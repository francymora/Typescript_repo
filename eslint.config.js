import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      "no-undef": "off", // Disattiva "no-undef" per evitare errori sulle variabili globali
      "no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
];
