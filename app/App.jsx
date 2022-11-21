import React from 'react';
import redux from 'REDUX';

class App extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
        };
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
        const theme = 'dark';
        return (
            <div className={`app ${theme}`}>
                app
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
