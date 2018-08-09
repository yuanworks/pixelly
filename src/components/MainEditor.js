import React, { Component } from 'react';

import Toolbar from './layout/Toolbar';
import Window from './layout/Window';
import BrushesToolbarButton from '../containers/BrushesToolbarButton';

import { Tools } from '../actions';
import InteractiveBoard from '../containers/InteractiveBoard';

class MainEditor extends Component {
  
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleToolChange = this.handleToolChange.bind(this);
    this.changeForeColor = this.changeForeColor.bind(this);
    this.changeBackColor = this.changeBackColor.bind(this);
  }

  getInitialState() {
    return {
      selectedTool: 'pencil',
      foreColor: 'red', /*'#000',*/
      backColor: '#fff',
      strokeWidth: 5
    }
  }

  handleToolChange(tool) {
    this.setState({selectedTool: tool});
  }

  changeForeColor(color) {
    this.setState({foreColor: color});
  }

  changeBackColor(color) {
    this.setState({backColor: color});
  }

  render() {
    return (
      <div className="MainEditor">
        
        <Toolbar handleToolChange={this.handleToolChange} foreColor={this.state.foreColor} backColor={this.state.backColor}
          onChangeForeColor={this.changeForeColor} onChangeBackColor={this.changeBackColor} >
          <BrushesToolbarButton tool={ Tools.PENCIL } />
          <BrushesToolbarButton tool={ Tools.ERASER } />
          <BrushesToolbarButton tool={ Tools.FILL } />
          <BrushesToolbarButton tool={ Tools.SELECTOR } />
          <BrushesToolbarButton tool={ Tools.PICKER } />
        </Toolbar>

        <Window title='Preview' defaultVisible='true' />
        
        <InteractiveBoard strokeWidth={this.state.strokeWidth} />
        
      </div>
    );
  }
}

export default MainEditor;
