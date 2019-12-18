import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

export const Item = ({ item }) => (
  <li className="wrapper-item">
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
      Update: first seen...
    </div>
  </li>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
