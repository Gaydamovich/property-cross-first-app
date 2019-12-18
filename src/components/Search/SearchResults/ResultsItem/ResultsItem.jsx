import React from 'react';
import PropTypes from 'prop-types';
import './ResultsItem.scss';
import { Link } from 'react-router-dom';


const ResultsItem = (props) => {
  const {
    item, getProperty,
    onClickItem, to,
  } = props;
  const clickItem = () => onClickItem(item.longTitle);
  const clickGetProperty = () => getProperty(item.placeName, 1);
  return (
    <>
      {to
        ? (
          <li className="search-results__items_item" aria-hidden>
            <Link to="/listing" onClick={clickGetProperty}>
              {item.longTitle}
            </Link>
          </li>
        ) : (
          <li className="search-results__items_item" onClick={clickItem} aria-hidden>
            {item.longTitle}
          </li>
        )}
    </>
  );
};

ResultsItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func,
  getProperty: PropTypes.func,
  to: PropTypes.string,
};

export default ResultsItem;
