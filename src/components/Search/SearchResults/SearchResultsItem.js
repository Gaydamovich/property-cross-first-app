import React from 'react';
import './SearchResultsItem.scss';


export const SearchResultsItem = props => {
  const { item, onClickItem } = props;
  const clickItem = () => onClickItem(item.city, item.street);
  
  return <li className='search-results__items_item' onClick={clickItem}>{item.city}, {item.street}</li>
};