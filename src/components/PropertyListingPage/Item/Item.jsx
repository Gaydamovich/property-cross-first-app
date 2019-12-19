import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';
import { Link } from 'react-router-dom';

export const Item = ({ item, getPropertyById }) => {
  const clickItem = () => getPropertyById(item.location.placeName, item.id);
  return (
    <li className="wrapper-item">
      <Link to="/details" onClick={clickItem}>
        <div className="wrapper-img">
          <img src={item.imgUrl} alt="property" className="wrapper-img__img-house" />
        </div>
        <div className="item__title">
          <p>{item.title}</p>
        </div>
        <div className="item__price">
          {item.priceFormatted}
        </div>
        <div className="item__updating">
          Update:
          &nbsp;
          {item.updatedInDaysFormatted}
        </div>
      </Link>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  getPropertyById: PropTypes.func.isRequired,
};
