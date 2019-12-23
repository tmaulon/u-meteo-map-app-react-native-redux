import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => {
        return { data: "blablabla" }
    }
});

export default rootReducer;