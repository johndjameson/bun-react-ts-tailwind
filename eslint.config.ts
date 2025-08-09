import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylistic,
  // @ts-expect-error https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    plugins: { react },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
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
