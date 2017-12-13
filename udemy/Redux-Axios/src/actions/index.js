import axios from 'axios';

const API_KEY = '3f143a19a8fa5b60d6053ca04bf3fad0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},kr`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}