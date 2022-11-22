import * as consts from './consts';

const is = (action) => Object.keys(consts).indexOf(action.type) >= 0;
const reducer = (state, action) => {
    if (action.type === consts.LAZYLOADBCHANGE) {
        return {
            ...state,
            lazyB: {
                ...state.lazyB,
                text: action.payload.text,
            },
        };
    }

    return state;
};

export default { is, reducer };
