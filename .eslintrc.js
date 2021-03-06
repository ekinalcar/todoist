module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: "off",
    "no-tabs": 0,
    quotes: [2, "double", { avoidEscape: true }],
    "no-mixed-spaces-and-tabs": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "no-param-reassign": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
