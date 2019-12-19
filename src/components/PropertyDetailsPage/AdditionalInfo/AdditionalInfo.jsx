import React from 'react';
import PropTypes from 'prop-types';
import './AdditionalInfo.scss';

export const AdditionalInfo = ({ property }) => (
  <div className="additional-info">
    <div className="additional-info__item">
      <span>
        bedroom
      </span>
      <span>
        {property.bedroomNumber}
      </span>
    </div>
    <div className="additional-info__item">
      <span>
        car spaces
      </span>
      <span>
        {property.carSpaces}
      </span>
    </div>
    <div className="additional-info__item">
      <span>
        bathroom
      </span>
      <span>
        {property.bathroomNumber}
      </span>
    </div>
  </div>
);

AdditionalInfo.propTypes = {
  property: PropTypes.object.isRequired,
};
