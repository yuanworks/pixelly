import { connect } from 'react-redux';

import Artboard from '../components/editor/Artboard';

const mapStateToProps = state => ({
  tool: state.selectedTool,
  foreColor: state.foreColor,
  backColor: state.backColor
});

export default connect(mapStateToProps)(Artboard);