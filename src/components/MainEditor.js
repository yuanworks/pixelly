import React, { Component } from 'react';

import Toolbar from './layout/Toolbar';
import Window from './layout/Window';
import BrushesToolbarButton from '../containers/BrushesToolbarButton';

import { Tools } from '../actions';
import InteractiveBoard from '../containers/InteractiveBoard';
import MainToolbarContainer from '../containers/MainToolbarContainer';

class MainEditor extends Component {
  
  constructor(props) {
    super(props);

    this.handleToolChange = this.handleToolChange.bind(this);
    this.changeForeColor = this.changeForeColor.bind(this);
    this.changeBackColor = this.changeBackColor.bind(this);
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
        
        <MainToolbarContainer />

        <Toolbar handleToolChange={this.handleToolChange}
          onChangeForeColor={this.changeForeColor} onChangeBackColor={this.changeBackColor} >
          <BrushesToolbarButton tool={ Tools.PENCIL } />
          <BrushesToolbarButton tool={ Tools.ERASER } />
          <BrushesToolbarButton tool={ Tools.FILL } />
          <BrushesToolbarButton tool={ Tools.SELECTOR } />
          <BrushesToolbarButton tool={ Tools.PICKER } />
        </Toolbar>

        <Window title='Preview' defaultVisible='true' />
        
        <InteractiveBoard />
        
      </div>
    );
  }
}

export default MainEditor;
