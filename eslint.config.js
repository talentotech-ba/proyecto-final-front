module.exports = [
  {
    rules: {
      semi: "warn",
      "prefer-const": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-alert": "error",
      "no-var": "error",
      quotes: ["warn", "double"],
      "prefer-destructuring": ["error", { object: true, array: false }],
      "prefer-object-spread": "error",
      "prefer-rest-params": "error",
      "prefer-template": "warn",
      curly: "warn",
      eqeqeq: ["warn", "smart"],
    },
  },
];
