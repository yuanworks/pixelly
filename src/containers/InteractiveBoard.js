import { connect } from 'react-redux';

import { setForeColor } from '../actions';
import { setBackColor } from '../actions';

import Artboard from '../components/editor/Artboard';

const mapStateToProps = state => ({
  tool: state.selectedTool,
  foreColor: state.foreColor,
  backColor: state.backColor
});

const mapDispatchToProps = dispatch => ({
  onChangeForeColor: (color) => dispatch(setForeColor(color)),
  onChangeBackColor: (color) => dispatch(setBackColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artboard);