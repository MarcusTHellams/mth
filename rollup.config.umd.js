import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

import {nameLibrary, PATH_SRC, PATH_DIST} from './config-library.js';

const shouldMinify = process.env.NODE_ENV;


export default {
    input: PATH_SRC  + 'index.js',
    output: {
        name: nameLibrary,
        sourcemap: 'inline',
        format: 'umd',
        file: PATH_DIST + nameLibrary + ".umd" + (shouldMinify === 'minify' ? '.min' : '') +".js"
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        resolve({
            module: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        (shouldMinify === 'minify' && minify())
    ],
    onwarn: warning => {
        const skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};