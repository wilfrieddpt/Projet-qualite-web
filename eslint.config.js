const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const { fileURLToPath } = require("url");
const { dirname } = require("path");
const { FlatCompat } = require("@eslint/eslintrc");

const __filename = fileURLToPath(require.main.filename);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname
});

module.exports = [
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