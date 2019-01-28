'use strict';

module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
};
