// src/App.jsx

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import useGoogleBooksApi from './hooks/useGoogleBooksApi';
import './styles.css';

/**
 * Main App component for the Book Search application.
 */
const App = () => {
  const [query, setQuery] = useState('');
  const { books, loading, error, fetchBooks } = useGoogleBooksApi();

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    fetchBooks(searchQuery);
  };

  return (
    <div className="app">
      <h1>Book Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <BookList books={books} />
    </div>
  );
};

export default App;
