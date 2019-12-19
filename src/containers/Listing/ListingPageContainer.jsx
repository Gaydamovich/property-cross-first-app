import { connect } from 'react-redux';
import ListingPage from '../../components/PropertyListingPage/ListingPage/ListingPage';
import { getProperties } from '../../actions/lisingPageActions';
import { getPropertyById } from '../../actions/detailsPageActions';


const mapStateToProps = (state) => ({
  listingPage: state.listingPage,
});

const mapDispatchToProps = {
  getProperties,
  getPropertyById,
};

export const ListingPageContainer = connect(mapStateToProps, mapDispatchToProps)(ListingPage);
