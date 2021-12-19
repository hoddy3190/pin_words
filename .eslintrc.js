// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // eslint --initをすると出力される.eslintrcのextendsは"eslint:recommended"になっているのでそのまま利用
        "eslint:recommended",
        // eslintはformatに関するルールも設定できるが、一部prettierとコンフリクトする
        // そのようなコンフリクトするルールや、prettierにとって不要なルールをOFFにするconfigが"prettier"(eslint-config-prettier)である
        // prettier公式が推奨していることがわかる文書: https://github.com/prettier/prettier/blob/554b15473dd4032a036d7db91a8f579e624c9822/docs/integrating-with-linters.md
        // eslint-config-prettier: https://github.com/prettier/eslint-config-prettier
        // 日本語解説記事: https://blog.ojisan.io/prettier-eslint-cli/
        //              「大きな変更点は ESLint の plugin 系の利用は推奨しない ことです。」
        //               2021年くらいまでは、eslint-plugin-prettierを使用していたがそれは非推奨になった
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "curly": "warn",
        "eqeqeq": "warn",
        "no-throw-literal": "warn",
        "semi": "off"
    }
};
