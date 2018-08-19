import { connect } from 'react-redux';
import MainToolbar from '../components/layout/MainToolbar';

const mapStateToProps = (state, ownProps) => ({
  selectedTool: state.selectedTool
});

export default connect(mapStateToProps)(MainToolbar)