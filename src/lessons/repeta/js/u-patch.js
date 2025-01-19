const BASE_URL = 'http://localhost:3000';

function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Contrnt-Type': `application/json`,
        },
        body: JSON.stringify(update),
    };
    return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBookById({rating: 4, author: 'Mango'}, 2)