import React from 'react';
import PropTypes from 'prop-types';
import './currentResultsSearch.scss';

const CurrentResultsSearch = (props) => {
  const { item } = props;
  let placeName;
  placeName = item.placeName.split('_').pop();
  placeName = placeName[0].toUpperCase() + placeName.slice(1);
  return (
    <li className="search-results__items_item" aria-hidden>
      {item.title}
      ,
      {placeName}
    </li>
  );
};

CurrentResultsSearch.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CurrentResultsSearch;
