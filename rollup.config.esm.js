import config from './rollup.config.umd.js';
import {nameLibrary,PATH_DIST} from './config-library.js';
const shouldMinify = process.env.NODE_ENV;

config.output.format = "es";
config.output.file = PATH_DIST+nameLibrary+".esm" + (shouldMinify === 'minify' ? '.min' : '') +".js";
export default config;
