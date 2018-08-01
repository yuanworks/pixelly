import React, { Component } from 'react';

import ToolbarButton from './layout/ToolbarButton';
import Toolbar from './layout/Toolbar';
import Artboard from './editor/Artboard';
import Window from './layout/Window';

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
          <ToolbarButton tool='pencil' />
          <ToolbarButton tool='eraser' />
          <ToolbarButton tool='fill' />
          <ToolbarButton tool='selector' />
          <ToolbarButton tool='picker' />
        </Toolbar>

        <Window title='Preview' defaultVisible='true' />
        
        <Artboard tool={this.state.selectedTool} foreColor={this.state.foreColor} backColor={this.state.backColor} strokeWidth={this.state.strokeWidth} />

      </div>
    );
  }
}

export default MainEditor;
