const babel = require('rollup-plugin-babel');
const ts = require('rollup-plugin-typescript2');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: './lib/index.ts',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        resolve({
            browser: true
        }),
        babel(),
        ts()
    ]
}