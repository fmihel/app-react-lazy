/* eslint-disable no-return-assign */
import React from 'react';
import redux from 'REDUX';
import { imports } from 'fmihel-lazy-load';

class App extends React.Component {
    constructor(p) {
        super(p);
        this.onLazyLoadA = this.onLazyLoadA.bind(this);
        this.onLazyLoadB = this.onLazyLoadB.bind(this);
        this.onLoadLibLazy = this.onLoadLibLazy.bind(this);
        this.onLoadLibsLazy = this.onLoadLibsLazy.bind(this);
        this.onImports = this.onImports.bind(this);
        this.onTheme = this.onTheme.bind(this);
        this.state = {
            LazyLoadA: undefined,
            LazyLoadB: undefined,
        };
    }

    onLazyLoadA() {
        // отложенная загрузка простого react компонента
        import('./components/LazyLoadA/LazyLoadA.jsx').then((mod) => {
            this.setState({ LazyLoadA: mod.default });
        });
    }

    onLazyLoadB() {
        // загрузка react с добавление состояния в redux
        import('./components/LazyLoadB/LazyLoadB.jsx').then((mod) => {
            this.setState({ LazyLoadB: mod.default });
        });
    }

    onLoadLibLazy() {
        // загрузка библиотеки
        import('jquery').then(({ default: $ }) => {
            console.log($);
        });
    }

    onLoadLibsLazy() {
        // загрузка нескольких библиотек
        Promise.all([
            import('lodash'),
            import('jquery'),
        ]).then(([{ default: $ }, { default: _ }]) => {
            console.log('jquery', $);
            console.log('lodash', _);
        });
    }

    onImports() {
        // загрузка модуля и нескольких библиотек через imports
        // нужна регистрация см lazy-load.config.js
        imports('mod1', '_', '$')
            .then(({ mod1, _, $ }) => {
                const Class = mod1.Mod1;
                const obj = mod1.default;
                obj.info();
                console.log('lodash', _);
                console.log('jquery', $);
            });
    }

    onTheme() {
        redux.actions.Theme();
    }
    // componentDidMount() {
    // разовый вызов после первого рендеринга
    // }

    // componentWillUnmount() {
    // разовый после последнего рендеринга
    // }

    // componentDidUpdate(prevProps, prevState, prevContext) {
    // каждый раз после рендеринга (кроме первого раза !)
    // }

    render() {
        const { LazyLoadA, LazyLoadB } = this.state;
        const { theme } = this.props;
        console.log('render', 'App');
        return (
            <div className={`app ${theme}`}>
                <div className='panel'>
                    <input type="button" onClick={this.onTheme} value='theme'/>
                    <input type="button" onClick={this.onLazyLoadA} value='LazyLoadA'/>
                    <input type="button" onClick={this.onLazyLoadB} value='LazyLoadB'/>
                    <input type="button" onClick={this.onLoadLibLazy} value='LoadLibLazy'/>
                    <input type="button" onClick={this.onLoadLibsLazy} value='LoadLibsLazy'/>
                    <input type="button" onClick={this.onImports} value='Imports'/>
                </div>
                <div className='content'>
                    {(LazyLoadA) && <LazyLoadA/>}
                    {(LazyLoadB) && <LazyLoadB/>}
                </div>
            </div>
        );
    }
}
App.defaultProps = {
};

const mapStateToProps = (state) => ({
    theme: state.ui.theme,
});

export default redux.connect(mapStateToProps)(App);
