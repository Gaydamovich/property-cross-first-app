import React from 'react';
import PropTypes from 'prop-types';
import './SearchResultsItem.scss';


const SearchResultsItem = (props) => {
  const { item, onClickItem } = props;
  const clickItem = () => onClickItem(item.title, item.placeName);
  return (
    <li className="search-results__items_item" onClick={clickItem} aria-hidden>
      {item.title}
      ,
      {item.placeName}
    </li>
  );
};

SearchResultsItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default SearchResultsItem;
