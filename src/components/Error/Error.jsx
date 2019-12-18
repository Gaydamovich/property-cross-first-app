import React from 'react';
import './Error.scss';
import PropTypes from 'prop-types';

export const Error = ({ message }) => (
  <div className="error-message" id="errors">
    {message}
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};
