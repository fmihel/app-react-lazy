import React from 'react';
import redux from 'REDUX';
import './data';
import './actions';
import './style.scss';
import { loadCSS } from 'fmihel-lazy-load';

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
    text: state.lazyB.text,
});

export default redux.connect(mapStateToProps)(LazyLoadB);
