import { SET_CURRENT_WHEATHER } from "../actions/action-types";

const intialState = {
    currentWeather: undefined
}
export default function (state = intialState, action) {
    if (action.type === SET_CURRENT_WHEATHER) {
        return {
            currentWeather: action.payload
        };
    }

    return state;
};
