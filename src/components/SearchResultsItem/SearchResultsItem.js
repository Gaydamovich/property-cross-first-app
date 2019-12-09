import React from 'react';
import './SearchResultsItem.scss';


export const SearchResultsItem = props => {
  const { clickItem, item } = props;
  
  return <li className='search-results__items_item' onClick={clickItem}>{item.city}, {item.street}</li>
};