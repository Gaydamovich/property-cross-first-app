import React from 'react';
import './FavouriteItem.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const FavouriteItem = ({ item, getPropertyById }) => {
  const clickItem = () => getPropertyById(item.location.placeName, item.id);
  return (
    <li className="wrapper-favourites-item">
      <Link to="/details" onClick={clickItem}>
        <div className="wrapper-img">
          <img src={item.imgUrl} alt="property" className="wrapper-img__img-house" />
        </div>
        <div className="favourites-item__title">
          <p>{item.title}</p>
        </div>
        <div className="favourites-item__price">
          {item.priceFormatted}
        </div>
        <div className="favourites-item__updating">
          Update:
          &nbsp;
          {item.updatedInDaysFormatted}
        </div>
      </Link>
    </li>
  );
};

FavouriteItem.propTypes = {
  item: PropTypes.object.isRequired,
  getPropertyById: PropTypes.func.isRequired,
};
