import React from 'react';
import './SearchResults.scss';


const SearchResults = ({ localStorageSave , searchStatus, onClickItem}) => {
  let title, listId;
  
  const history = localStorageSave.map( item => {
    return <li className='search-results__items_item'
               key={item.id}
               onClick={ () => onClickItem(item.city, item.street) }>{item.city}, {item.street}</li>
  });
  
  searchStatus ? title = 'Available locations' : title = 'Recent searches';
  searchStatus ? listId = 'locations' : listId = 'recentSearches';
  
  return (
    <div className='search-results'>
      <h2  className='search-results__title'>{ title }</h2>
      <ul  className='search-results__items' id={ listId }>
        { localStorageSave.length ? history : <div>Not Found</div> }
      </ul>
    </div>
  )
};

export default SearchResults;