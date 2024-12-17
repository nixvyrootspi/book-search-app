// src/hooks/useGoogleBooksApi.js

import { useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch data from Google Books API.
 */
const useGoogleBooksApi = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async (query, startIndex = 0) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: query,
          startIndex,
          maxResults: 10,
        },
      });
      setBooks(response.data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, fetchBooks };
};

export default useGoogleBooksApi;
