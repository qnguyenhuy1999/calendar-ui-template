import prettierPlugin from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import * as tseslint from "typescript-eslint";

import js from "@eslint/js";

const config = [
  // Base JS rules
  js.configs.recommended,

  // TypeScript basic rules (no type info) — apply globally
  ...tseslint.configs.recommended,

  {
    ignores: ["tailwind.config.js", "webpack.config.ts", "webpack.local.config.ts", "webpack.production.config.ts", "src/reportWebVitals.ts", "eslint.config.ts", "postcss.config.js"],
  },

  // Type-aware rules — apply only to files included in tsconfig.json
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ...tseslint.configs.recommendedTypeChecked[0],
    languageOptions: {
      ...tseslint.configs.recommendedTypeChecked[0].languageOptions,
      parserOptions: {
        ...tseslint.configs.recommendedTypeChecked[0].languageOptions?.parserOptions,
        project: ["./tsconfig.json"],
      },
    },
  },
  ...tseslint.configs.recommendedTypeChecked.slice(1).map((configBlock) => ({
    ...configBlock,
    files: ["src/**/*.ts", "src/**/*.tsx"], // 👈 apply only to project files
  })),

  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    rules: {
      ...tseslint.configs.recommendedTypeChecked[0].rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },

  // React rules
  {
    plugins: {
      react: pluginReact,
    },
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  // Prettier plugin
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];

export default config;
