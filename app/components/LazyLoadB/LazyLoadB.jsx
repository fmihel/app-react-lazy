import React from 'react';
import redux from 'REDUX';
import { loadCSS } from 'fmihel-lazy-load';
import dataDefault from './data';
import './actions';
import './style.scss';

loadCSS('components/LazyLoadB/style.css');

// eslint-disable-next-line no-empty-pattern
const LazyLoadB = ({ text }) => {
    const click = () => {
        redux.actions.LazyLoadBChange('LazyLoad send change');
    };
    return (
        <div onClick={click} className='lazy-load-b'>
            {text}
        </div>
    );
};

const mapStateToProps = (state) => ({
    ...{ ...dataDefault.lazyB, ...state.lazyB },
});

export default redux.connect(mapStateToProps)(LazyLoadB);
