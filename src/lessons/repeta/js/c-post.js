const BASE_URL = 'http://localhost:3000';

const newBook = {
    title: 'Test book on JS',
    author: 'Me',
    genres: ['JS'],
    rating: 10
};

function createBook(book) {
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
}
    return fetch(`${BASE_URL}/books`, options)
        .then(res => res.json())
        
};

createBook(newBook)
    .then(renderBook)

function renderBook(book) {
    console.log('Response come');
    console.log(book)
}