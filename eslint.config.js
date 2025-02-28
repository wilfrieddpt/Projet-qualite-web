import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname
});

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: "./tsconfig.json"
            }
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            "prettier/prettier": "error",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "off"
        }
    },
    ...compat.extends("plugin:prettier/recommended")
];
