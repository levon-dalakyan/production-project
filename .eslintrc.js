module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        indent: [2, 4],
        quotes: [2, "double"],
        semi: [2, "always"],
        "react/react-in-jsx-scope": 0,

        // remove later
        "@typescript-eslint/ban-ts-comment": 0,
    },
};
