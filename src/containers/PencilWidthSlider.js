import { connect } from 'react-redux';
import { setPencilWidth } from '../actions';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';


const mapStateToProps = (state, ownProps) => ({
  value: state.pencilWidth
});

const mapDispatchToProps = dispatch => ({
  onChange: (value) => dispatch(setPencilWidth(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider)