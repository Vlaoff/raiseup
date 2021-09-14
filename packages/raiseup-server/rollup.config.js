import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import run from 'rollup-plugin-run'
import json from 'rollup-plugin-json'

const dev = process.env.ROLLUP_WATCH === 'true'

export const config = {
  input: './src/index.ts',
  output: {
    dir: './dist',
    format: 'cjs'
  },
  plugins: [
    json(),
    autoExternal(),
    typescript({
      include: ['./src/**/*.ts', '../raiseup-shared/src/**/*.ts']
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.gql']
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    dev && run()
  ]
}

export default config
