import { loadCSS, imports } from 'fmihel-lazy-load';

loadCSS.param = {
    hash: CSS_HASH,
    root: CSS_ROOT_PATH,
};

imports.add({
    _() { return import('lodash').then((mod) => mod.default); },
    $() { return import('jquery').then((mod) => mod.default); },
    mod1() { return import('./js-modules/mod1'); },
});
