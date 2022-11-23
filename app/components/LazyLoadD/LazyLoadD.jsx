import React, { useState } from 'react';
import './style.scss';
import { loadCSS } from 'fmihel-lazy-load';
import Tree from 'fmihel-react-bootstrap-tree';
import defaultData from './defaultTreeData';

loadCSS('components/LazyLoadD/style.css');

export default ({ data = defaultData }) => {
    const [setup, setSetup] = useState({});
    const change = (o) => {
        setSetup(o.setup);
    };
    return (
        <div className="lazy lazy-load-d">
            <Tree
                id={'my-tree'}
                data={data}
                setup={setup}
                onChange={change}
            />
        </div>
    );
};
