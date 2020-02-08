const babel = require('rollup-plugin-babel');
const ts = require('rollup-plugin-typescript2');

module.exports = {
    input: './lib/index.ts',
    output: {
        file: './dist/index.js',
        format: 'cjs'
    },
    plugins: [
        babel(),
        ts()
    ]
}