import axios from 'axios';

const ROOT_URL = 'http://hong-web.com/JSON/port.json';

export const FETCH_ELEMENT = 'fetch_element';

export function FetchElement() {
    const request = axios.get(ROOT_URL);

    return {
        type : FETCH_ELEMENT,
        payload : request
    }
}