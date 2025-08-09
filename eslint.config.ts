import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylistic,
  // @ts-expect-error https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
