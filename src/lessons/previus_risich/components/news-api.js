const API_KEY = 'dfgdfjhjdfjfsjfkjf';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
    headers: {
        Authrization: API_KEY,
    },
};

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {

        const url = `${BASE_URL}/everything?q=${this.searchQuery}&languege=en&pageSize=5&page=${this.page}`;

        return fetch(url, options)
            .then(response => response.json())
            .then(({articles}) => {
                this.page += 1;
                return articles;
            }
                )
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}