
import axios from "axios"

export let page = 0;
export const perPage = 15;
let privInputValue = '';

export async function getImages(input) {
    const API_KEY = '48149972-37b948820d674e189867b2eae'
    const BASE_URL = 'https://pixabay.com/api/'

    // axios.defaults.headers.common["key"] = API_KEY;

    // axios.defaults.baseURL = 'https://pixabay.com/api/';

    // if (input === '') {
    //     return
    // }

    if (page < 1) {
        privInputValue = input
        page += 1;
    } else if (page > 0 && (input !== privInputValue)) {
        page = 1;
        privInputValue = input;
    } else {
        page +=1
    }

    return await axios.get(`${BASE_URL}`, {
        params: {
            key: API_KEY,
            q: input,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: perPage,
            page: page
        }
    })

}