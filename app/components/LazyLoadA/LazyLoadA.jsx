import { loadCSS } from 'fmihel-lazy-load';
import React from 'react';
import './style.scss';

loadCSS('components/LazyLoadA/style.css');

export default ({}) => {
    const text = 'LazyLoadA';
    return (
        <div>
            {text}
        </div>
    );
};
