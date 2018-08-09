import { connect } from 'react-redux';
import { setForeColor } from '../actions';
import ToolbarButton from '../components/layout/ToolbarButton';

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.tool === state.selectedTool
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setForeColor(ownProps.tool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarButton)