import React, { useState, useCallback } from 'react';
import './searchComp.css';

const SearchBar = ({ onSearch, placeholder = 'Search...',className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((term) => onSearch(term), 300),
    [onSearch]
  ); // added debouncing 

  const handleChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    debouncedSearch(newTerm);
  };

  return (
    <div className="searchbar-container">
      <div className={`searchbar ${className}`}>
        <div className="searchbar-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder={placeholder}
            className="searchbar-input"
          />
          <svg viewBox="0 0 24 24" className="searchbar-icon">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;