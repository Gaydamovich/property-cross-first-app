import React from 'react';
import PropTypes from 'prop-types';

const ListingPage = (props) => {
  const { listingPage } = props;
  return (
    <div>
      <h1>
        название:
        {listingPage.placeName}
      </h1>
      <div>
        найдено:
        {listingPage.list.length}
      </div>
      {/* array */}
    </div>
  );
};

ListingPage.propTypes = {
  listingPage: PropTypes.object.isRequired,
};

export default ListingPage;
