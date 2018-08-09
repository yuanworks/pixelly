import { connect } from 'react-redux';

import Artboard from '../components/editor/Artboard';

const mapStateToProps = state => ({
  tool: state.selectedTool
});

export default connect(mapStateToProps)(Artboard);