import React from 'react';
import './style.scss';
import { loadCSS } from 'fmihel-lazy-load';

loadCSS('components/LazyLoadC/style.css');

export default ({}) => {
    const text = 'LazyLoadC';
    return (
        <div className='lazy-load-c'>
            {text}
        </div>
    );
};
