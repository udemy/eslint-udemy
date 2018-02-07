'use strict';

const assert = require('assert');
const fs = require('fs');
const join = require('path').join;
const babel = require('babel-core');
const preset = require('./index');

// eslint-disable-next-line no-console
console.log('test babel-preset-udemy-website');

fs.readdirSync(join(__dirname, 'tests/source')).filter(name => name.endsWith('.js')).forEach(name => {
    const result = babel.transformFileSync(join(__dirname, 'tests/source', name), preset).code;
    const expected = fs.readFileSync(join(__dirname, 'tests/result', name));
    // eslint-disable-next-line no-console
    console.log(`\tcheck ${name}`);
    assert.equal(result, expected);
});
