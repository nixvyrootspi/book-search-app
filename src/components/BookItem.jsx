// src/components/BookItem.jsx

import React from 'react';

/**
 * Displays a single book's information: title, author, and thumbnail.
 */
const BookItem = ({ book }) => {
  const { title, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="book-item">
      <img 
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'} 
        alt={title} 
        className="book-thumbnail" 
      />
      <h3>{title}</h3>
      <p>{authors?.join(', ') || 'Unknown Author'}</p>
    </div>
  );
};

export default BookItem;
