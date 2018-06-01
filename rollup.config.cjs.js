import config from './rollup.config.umd.js';
import {nameLibrary,PATH_DIST,PATH_SRC} from './config-library.js';
const shouldMinify = process.env.NODE_ENV;

config.output.format = "cjs";
config.output.file = PATH_DIST+nameLibrary+".cjs" + (shouldMinify === 'minify' ? '.min' : '') +".js";

export default config;
