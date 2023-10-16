import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type='text'
        id='searchBar'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;