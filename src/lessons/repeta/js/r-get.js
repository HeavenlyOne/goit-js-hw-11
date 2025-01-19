const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
    return fetch(`${BASE_URL}/books`).then(res => res.json());
}
function fetchBookByID(bookId) {
    return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

fetchBooks();
fetchBookByID(2)