import { loadCSS } from 'fmihel-lazy-load';

loadCSS.param = {
    hash: CSS_HASH,
    root: CSS_ROOT_PATH,
};

console.log(CSS_ROOT_PATH, CSS_HASH, loadCSS.param);
