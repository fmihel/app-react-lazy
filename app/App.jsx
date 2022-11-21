import React from 'react';
import redux from 'REDUX';

class App extends React.Component {
    constructor(p) {
        super(p);
        this.onLazyLoadA = this.onLazyLoadA.bind(this);
        this.onLoadLibLazy = this.onLoadLibLazy.bind(this);
        this.onTheme = this.onTheme.bind(this);
        this.state = {
            LazyLoadA: undefined,
            theme: 'dark',
        };
    }

    onLazyLoadA() {
        import('./components/LazyLoadA/LazyLoadA.jsx').then((mod) => {
            this.setState({ LazyLoadA: mod.default });
        });
    }

    onLoadLibLazy() {
        import('jquery').then((o) => {
            console.log(o);
        });
        /* Promise.all(
            import('jquery'),
            import('lodash'),
        ).then((o) => {
            console.log(o);
        }); */
    }

    onTheme() {
        this.setState((prev) => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
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
        const { LazyLoadA, theme } = this.state;
        return (
            <div className={`app ${theme}`}>
                <div className='panel'>
                    <input type="button" onClick={this.onTheme} value='theme'/>
                    <input type="button" onClick={this.onLazyLoadA} value='LazyLoadA'/>
                    <input type="button" onClick={this.onLoadLibLazy} value='LoadLibLazy'/>
                </div>
                <div className='content'>
                    {(LazyLoadA) && <LazyLoadA/>}
                </div>
            </div>
        );
    }
}
App.defaultProps = {
};

const mapStateToProps = (state) => ({
    // test: state.test,
});

export default redux.connect(mapStateToProps)(App);
