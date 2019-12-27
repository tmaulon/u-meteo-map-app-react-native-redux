import axios from 'axios';
import { API_KEY, FACEBOOK_APP_ID } from '../constant';
import { SET_CURRENT_WHEATHER, SET_FORECAST_WEATHER, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_ERROR } from './action-types';

const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const FORECAST_WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

// import { Facebook } from 'expo'
import * as Facebook from 'expo-facebook';
import { AsyncStorage } from 'react-native';

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

export const facebookLogin = (onSuccess, onError) => dispatch => {
    Facebook.initializeAsync(FACEBOOK_APP_ID);
    const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
    } = Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
    }).then(fbResponse => {
        if (fbResponse.type === "success") {
            //dispatcher onSuccess fbResponse.token
            setToken(fbResponse.token)
            // dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: fbResponse.token })
            AsyncStorage.setItem("fbToken", fbResponse.token)
            onSuccess && onSuccess()

        } else {
            //dispatcher une erreur
            dispatch({ type: FACEBOOK_LOGIN_ERROR })
            onError && onError()
        }
    }).catch(error => {
        // dispatcher erreur
        dispatch({ type: FACEBOOK_LOGIN_ERROR })
        onError && onError()

    })
}

export const setToken = (token) => dispatch => {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}