import { connect } from 'react-redux';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { toolWidth, setToolWidth } from './../actions/helpers';

const mapStateToProps = (state, ownProps) => ({
  value: toolWidth(state),
  defaultValue: toolWidth(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setToolWidth(ownProps.selectedTool, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)