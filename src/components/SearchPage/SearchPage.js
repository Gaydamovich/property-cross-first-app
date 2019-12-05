import React from 'react';
import './SearchPage.scss'
import SearchPanel from "../SearchPanel/SearchPanel";
import SearchResults from "../SearchResults/SearchResults";

const SearchPage = () => {
  return (
    <div className='wrapper-search'>
      <SearchPanel />
      <SearchResults />
    </div>
  )
};

export default SearchPage