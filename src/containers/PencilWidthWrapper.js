import { connect } from 'react-redux';
import ToolbarInput from '../components/layout/ToolbarInput';
import { toolWidth, setToolWidth } from '../actions/helpers';

const mapStateToProps = (state, ownProps) => ({
  value: toolWidth(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (e) => dispatch(setToolWidth(ownProps.selectedTool, e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarInput)