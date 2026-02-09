import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  // 先挂 Vue 推荐规则
  ...vue.configs["flat/recommended"],

  // 对 .vue：使用 vue-eslint-parser，并覆盖掉“纯格式”规则
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // ✅ 这些交给 Prettier（否则 max-warnings=0 会把你折磨死）
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
      "vue/html-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-closing-bracket-newline": "off",

      // 这条是语义类：你可以选择保留或关闭
      // 保留：要求 props 有默认值（更严格）
      "vue/require-default-prop": "warn",
    },
  },

  // JS/TS 文件
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
  },
];
