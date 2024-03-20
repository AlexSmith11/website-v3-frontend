module.exports = {
  overrides: [
    // exclude views from the multiword requirement
    {
      files: ["src/views/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@babel/eslint-parser",
  },
  extends: ["plugin:vue/base"],
};
