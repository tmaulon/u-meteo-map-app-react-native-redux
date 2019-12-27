import axios from 'axios';
import { API_KEY } from '../constant';
import { SET_CURRENT_WHEATHER } from './action-types';
import { SET_FORECAST_WEATHER } from './action-types';

const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const FORECAST_WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

//action creator
export const getCurrentWeatherByCity = city => async dispatch => {
    const response = await axios.get(`${WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}`);
    // when dispatch() is called, all reducers are called
    dispatch({ type: SET_CURRENT_WHEATHER, payload: response.data })
}

export const getForecastWeatherByCity = city => async dispatch => {
    const response = await axios.get(`${FORECAST_WEATHER_BASE_URL}?q=${city}&appid=${API_KEY}`);
    // when dispatch() is called, all reducers are called
    dispatch({ type: SET_FORECAST_WEATHER, payload: response.data })
}