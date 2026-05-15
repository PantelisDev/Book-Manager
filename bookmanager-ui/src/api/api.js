const BASE_URL = 'http://localhost:8080/api';

export const bookAPI = {
    getAll: () => fetch(`${BASE_URL}/books`).then(res => res.json()),
    getById: (id) => fetch(`${BASE_URL}/books/${id}`).then(res => res.json()),
    create: (book) => fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    }).then(res => res.json()),
    update: (id, book) => fetch(`${BASE_URL}/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    }).then(res => res.json()),
    delete: (id) => fetch(`${BASE_URL}/books/${id}`, { method: 'DELETE' })
};

export const authorAPI = {
    getAll: () => fetch(`${BASE_URL}/authors`).then(res => res.json()),
    getById: (id) => fetch(`${BASE_URL}/authors/${id}`).then(res => res.json()),
    create: (author) => fetch(`${BASE_URL}/authors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(author)
    }).then(res => res.json()),
    update: (id, author) => fetch(`${BASE_URL}/authors/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(author)
    }).then(res => res.json()),
    delete: (id) => fetch(`${BASE_URL}/authors/${id}`, { method: 'DELETE' })
};