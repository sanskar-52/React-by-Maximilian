import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],

    plugins: {
      react: pluginReact,
    },

    extends: [js.configs.recommended, pluginReact.configs.flat.recommended],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      // Catch typos like logoImo
      "no-undef": "error",

      // React 17+ and React 19 do not need React import
      "react/react-in-jsx-scope": "off",

      // Optional: show unused imports/variables as errors
      "no-unused-vars": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
