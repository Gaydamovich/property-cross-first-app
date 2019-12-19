import React from 'react';
import PropTypes from 'prop-types';
import './BasicInfo.scss';

export const BasicInfo = ({ property, location }) => (
  <div className="basic-info">
    <div className="basic-info__img">
      <img src={property.imgUrl} alt="flat" />
    </div>
    <div className="basic-info__description">
      <h1 id="title">{property.title}</h1>
      <h3 id="locationTitle">{location.longTitle}</h3>
      <p>{property.summary}</p>
      <p className="basic-info__description_price">{property.priceFormatted}</p>
      <hr />
      <p>{property.updatedInDaysFormatted}</p>
      <button id="addFavourite" className="basic-info__btn" type="submit">
        Favorites
      </button>
    </div>
  </div>
);

BasicInfo.propTypes = {
  property: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
