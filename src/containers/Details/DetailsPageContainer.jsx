import { connect } from 'react-redux';
import DetailsPage from '../../components/PropertyDetailsPage/DetailsPage';
import { addPropertyToFavourites, removePropertyToFavourites } from '../../actions/favouritesPageActions';

const mapStateToProps = (state) => ({
  detailsPage: state.detailsPage,
  favouritesPage: state.favouritesPage,
});

const mapDispatchToProps = {
  addPropertyToFavourites,
  removePropertyToFavourites,
};

export const DetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
