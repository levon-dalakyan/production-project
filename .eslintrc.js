module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "i18next"],
    rules: {
        indent: [2, 4],
        quotes: [2, "double"],
        semi: [2, "always"],
        "react/react-in-jsx-scope": 0,
        "i18next/no-literal-string": [2, { markupOnly: true }],

        // remove later
        "@typescript-eslint/ban-ts-comment": 0,
    },
};
