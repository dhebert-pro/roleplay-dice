module.exports = {
  rules: {
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": 0,
    "operator-linebreak": 0,
    "no-await-in-loop": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "indent": 0,
    "import/order": ["error",
    {
      "newlines-between": "always",
      "groups": ["external", "builtin", "internal", "object", "index", ["sibling", "parent"]],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
  }
}
