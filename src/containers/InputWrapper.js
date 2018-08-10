import { connect } from 'react-redux';
import { setSelectedTool } from '../actions';
import ToolbarInput from '../components/layout/ToolbarInput';

const mapStateToProps = (state, ownProps) => ({
  //value: state.
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  //onClick: () => dispatch(setSelectedTool(ownProps.tool))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarInput)