import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search by name or price"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>
    </form>
  );
}
