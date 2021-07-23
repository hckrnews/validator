module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: ['@hckrnews/eslint-config'],
    parserOptions: {
        sourceType: 'module',
        parser: '@babel/eslint-parser',
        babelOptions: {
            configFile: './babel.config.cjs',
        },
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
