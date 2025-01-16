
export function getImages(input) {
    const API_KEY = '48149972-37b948820d674e189867b2eae'
    const BASE_URL = 'https://pixabay.com/api/'
    const searchParams = new URLSearchParams({
    key: API_KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 30
})
    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
    })
}