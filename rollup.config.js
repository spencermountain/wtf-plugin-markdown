import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import sizeCheck from 'rollup-plugin-filesize-check'
const name = 'wtf-plugin-markdown'
console.log('\n 📦  - running rollup..\n')

import { version } from './package.json'
const banner = '/* ' + name + ' ' + version + ' MIT */'

export default [
  {
    input: 'src/index.js',
    output: [{ banner: banner, file: `builds/${name}.mjs`, format: 'esm' }],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      }),
      sizeCheck()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner: banner,
        file: `builds/${name}.js`,
        format: 'umd',
        sourcemap: true,
        name: 'wtfMarkdown'
      }
    ],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      }),
      sizeCheck()
    ]
  },
  {
    input: 'src/index.js',
    output: [{ banner: banner, file: `builds/${name}.min.js`, format: 'umd', name: 'wtfMarkdown' }],
    plugins: [
      resolve(),
      json(),
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      }),
      terser(),
      sizeCheck()
    ]
  }
]
