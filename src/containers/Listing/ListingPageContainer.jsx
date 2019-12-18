import { connect } from 'react-redux';
import ListingPage from '../../components/PropertyListingPage/ListingPage';

const mapStateToProps = (state) => ({
  listingPage: state.listingPage,
});

const ListingPageContainer = connect(mapStateToProps)(ListingPage);

export { ListingPageContainer };
