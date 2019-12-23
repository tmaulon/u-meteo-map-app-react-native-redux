import axios from 'axios';
import API_KEY from '../constant';
import { SET_CURRENT_WHEATHER } from './action-types';

const WEAHTER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

//action creator
export const getCurrentWeatherByCity = city => async dispatch => {
    const response = await axios.get(`${WEAHTER_BASE_URL}?q=${city}&appid=${API_KEY}`);
    // when dispatch() is called, all reducers are called
    dispatch({ type: SET_CURRENT_WHEATHER, payload: response.data })
}