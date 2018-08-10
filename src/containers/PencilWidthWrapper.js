import { connect } from 'react-redux';
import { setPencilWidth } from '../actions';
import ToolbarInput from '../components/layout/ToolbarInput';

const mapStateToProps = (state, ownProps) => ({
  value: state.pencilWidth
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(setPencilWidth(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarInput)