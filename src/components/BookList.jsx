// src/components/BookList.jsx

import React from 'react';
import BookItem from './BookItem';

/**
 * Renders a list of books.
 */
const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
