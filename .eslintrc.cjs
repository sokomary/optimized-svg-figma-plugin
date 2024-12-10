module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@figma/figma-plugins/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    root: true, 
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'caughtErrorsIgnorePattern': '^_'
            }
        ]
    }
};