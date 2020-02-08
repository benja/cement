const babel = require('rollup-plugin-babel');
const ts = require('rollup-plugin-typescript2');

module.exports = {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        babel(),
        ts()
    ]
}