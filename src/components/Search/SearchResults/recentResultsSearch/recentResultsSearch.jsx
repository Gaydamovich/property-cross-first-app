import React from 'react';
import PropTypes from 'prop-types';
import './recentResultsSearch.scss';


const RecentResultsSearch = (props) => {
  const { item, onClickItem } = props;
  let placeName;
  const clickItem = () => onClickItem(item.title, placeName);
  placeName = item.placeName.split('_').pop();
  placeName = placeName[0].toUpperCase() + placeName.slice(1);
  return (
    <li className="search-results__items_item" onClick={clickItem} aria-hidden>
      {item.title}
      ,
      {placeName}
    </li>
  );
};

RecentResultsSearch.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default RecentResultsSearch;
