module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "plugins": ["vue"],
    "settings": {
        "html/html-extensions": [".html", ".vue", ".php", ".twig"]
    },
    //"parser": "@babel/eslint-parser",//remember: npm install @babel/eslint-parser --save-dev
    "parserOptions": {
        "ecmaVersion": 2017,//origin 2017, set to 2018 when necessary
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "experimentalObjectRestSpread": true
        }
    },
    "globals": {
        "ajax": true,
        "axios": true,
        "Tether": true,
        "Promise": true,
        "d3": true
    },
    "extends": ["eslint:recommended", "plugin:vue/recommended"],
    "rules": {
        "indent": "off",
        "vue/html-indent":"off",
        "vue/max-attributes-per-line":"off",
        "linebreak-style": ["error", "windows"],
        "semi": ["error", "always"],
        "comma-dangle": ["warn", {
            "arrays": "ignore",
            "objects": "ignore",
            "imports": "ignore",
            "exports": "ignore",
            "functions": "never"
        }],
        "no-control-regex": "off",
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "no-console": "off",
        "no-debugger": "off",
        "no-alert": "error",
        "no-dupe-args": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "vue/no-lone-template": "off",
        "vue/html-self-closing":"off",
        "no-unused-vars": "off"
    }
};
