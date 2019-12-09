import React from 'react';
import './SearchResults.scss';


export const SearchResults = props => {
  const { recentSearches , searchStatus, onClickItem} = props;
  
  const history = recentSearches.map( item => {
    const clickItem = () => onClickItem(item.city, item.street);
    
    return <li className='search-results__items_item'
               key={item.id}
               onClick={ clickItem }>{item.city}, {item.street}</li>
  });
  
  return (
    <div className='search-results'>
      <h2  className='search-results__title'>
        { searchStatus ? 'Available locations' : 'Recent searches' }
      </h2>
      <ul  className='search-results__items' id={ searchStatus ? 'locations' : 'recentSearches' }>
        { recentSearches.length ? history : <div>Not Found</div> }
      </ul>
    </div>
  )
};