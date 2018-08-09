import { connect } from 'react-redux';
import { setSelectedTool } from '../actions';
import ToolbarButton from '../components/layout/ToolbarButton';

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.tool === state.selectedTool
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSelectedTool(ownProps.tool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarButton)