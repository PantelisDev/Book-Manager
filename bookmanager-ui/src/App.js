import React, { useState, useEffect } from 'react';
import Topbar from './components/layout/Topbar';
import NavTabs from './components/layout/NavTabs';
import BooksTable from './components/books/BooksTable';
import AuthorsTable from './components/authors/AuthorsTable';
import { bookAPI, authorAPI } from './api/api';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    bookAPI.getAll().then(data => setBooks(data));
    authorAPI.getAll().then(data => setAuthors(data));
  }, []);

  const filteredBooks = books.filter(b =>
    b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.authors?.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAuthors = authors.filter(a =>
    a.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.nationality?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBook = (book) => {
    bookAPI.create(book).then(saved => setBooks([saved, ...books]));
  };

  const handleDeleteBook = (id) => {
    bookAPI.delete(id).then(() => setBooks(books.filter(b => b.id !== id)));
  };

  const handleUpdateBook = (id, book) => {
    bookAPI.update(id, book).then(updated => setBooks(books.map(b => b.id === id ? updated : b)));
  };

  const handleAddAuthor = (author) => {
    authorAPI.create(author).then(saved => setAuthors([saved, ...authors]));
  };

  const handleDeleteAuthor = (id) => {
    authorAPI.delete(id).then(() => setAuthors(authors.filter(a => a.id !== id)));
  };

  const handleUpdateAuthor = (id, author) => {
    authorAPI.update(id, author).then(updated => setAuthors(authors.map(a => a.id === id ? updated : a)));
  };

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', fontFamily: 'Roboto, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <Topbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div style={{ padding: '20px 24px' }}>
        {activeTab === 'books' ? (
          <BooksTable
            books={filteredBooks}
            onAdd={handleAddBook}
            onDelete={handleDeleteBook}
            onUpdate={handleUpdateBook}
          />
        ) : (
          <AuthorsTable
            authors={filteredAuthors}
            onAdd={handleAddAuthor}
            onDelete={handleDeleteAuthor}
            onUpdate={handleUpdateAuthor}
          />
        )}
      </div>
    </div>
  );
}

export default App;
