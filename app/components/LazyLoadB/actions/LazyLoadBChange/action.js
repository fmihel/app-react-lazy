import redux from 'REDUX';
import * as consts from './consts';

const doAction = (text) => (dispatch) => {
    dispatch({
        type: consts.LAZYLOADBCHANGE,
        payload: { text },
    });
};
const action = (text) => redux.store.dispatch(doAction(text));
export default action;
