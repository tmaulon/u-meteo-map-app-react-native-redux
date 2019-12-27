import { SET_CURRENT_WHEATHER, SET_FORECAST_WEATHER } from "../actions/action-types";

const intialState = {
    currentWeather: undefined
}
export default function (state = intialState, action) {
    if (action.type === SET_CURRENT_WHEATHER) {
        return {
            ...state,
            currentWeather: action.payload
        };
    } else if (action.type === SET_FORECAST_WEATHER) {
        return {
            ...state,
            forecastWeather: action.payload
        }
    }

    return state;
};
