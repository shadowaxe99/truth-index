```javascript
import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you would typically make a request to your server to perform the search
    // For the purpose of this example, we'll just log the search term
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="searchBar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
```