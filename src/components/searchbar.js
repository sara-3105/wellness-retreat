import React from 'react'
import SearchBar from './ui/searchComp';

const Search = ({onSearch}) => {

    const handleSearch = (searchTerm) => {
      console.log('Searching for:', searchTerm);
      onSearch(searchTerm);
    };
  return (
    <SearchBar
        onSearch={handleSearch}
        placeholder="Search retreats by title..."
      />
  )
}

export default Search;