import { createStore } from 'redux';

const initialState = {
    bedroom: { light1: false, light2: false },
    kitchen: { light1: false, light2: false },
};

function lightReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_LIGHTS':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const store = createStore(lightReducer);

export default store;
