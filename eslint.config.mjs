import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused eslint-disable directive warnings
      "eslint-comments/no-unused-disable": "off",

      // Disable React hook naming rule
      "react-hooks/rules-of-hooks": "off",

      // Disable unused variables for both TS and JS
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "off", // Or use "warn" instead of "off" to just display warnings
        {
          argsIgnorePattern: "^_", // Ignore unused function arguments starting with "_"
          varsIgnorePattern: "^_", // Ignore unused variables starting with "_"
          ignoreRestSiblings: true, // Ignore unused destructured variables
        },
      ],

      // Disable unescaped entities warnings
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
