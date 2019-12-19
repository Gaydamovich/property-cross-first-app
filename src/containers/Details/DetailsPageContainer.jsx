import { connect } from 'react-redux';
import DetailsPage from '../../components/PropertyDetailsPage/DetailsPage';
import { getPropertyById } from '../../actions/detailsPageActions';


const mapStateToProps = (state) => ({
  detailsPage: state.detailsPage,
});

const mapDispatchToProps = {
  getPropertyById,
};

export const DetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
