import { SET_CURRENT_WHEATHER } from "../actions/action-types";

const intialState = {
    data: undefined
}
export default function (state = intialState, action) {
    if (action.type === SET_CURRENT_WHEATHER) {
        return {
            data: action.payload
        };
    }

    return state;
};
