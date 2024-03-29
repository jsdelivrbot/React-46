import axios from 'axios';

const ROOT_URL = 'http://www.shesmiss.co.kr/JSON/INSTA.json';

export const FETCH_ELEMENT = 'fetch_element';

export function FetchElement() {
    const request = axios.get(ROOT_URL);

    return {
        type : FETCH_ELEMENT,
        payload : request
    }
}