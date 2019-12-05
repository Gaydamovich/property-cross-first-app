import React from 'react';
import './SearchResults.scss';


const SearchResults = () => {
  return (
    <div className='search-results'>
      <h2  className='search-results__title'>List Name(dynamic)</h2>
      <ul  className='search-results__items' id='id_dynamic'>
        <li className='search-results__items_item'>example 1</li>
        <li className='search-results__items_item'>example 2</li>
        {/*  ...  */}
      </ul>
    </div>
  )
};

export default SearchResults;