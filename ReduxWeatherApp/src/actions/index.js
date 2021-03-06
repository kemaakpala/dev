import axios from 'axios';

const API_KEY = 'f2750fc589ec149a27ccf1df784b098a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},gb`;
    const request = axios.get(url);

    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}