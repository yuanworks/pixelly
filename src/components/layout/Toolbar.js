import React, { Component } from 'react';
import './Toolbar.css';
import Draggable from 'react-draggable';
import ToolbarExpander from './ToolbarExpander';
import SelectedToolbarColorPicker from '../../containers/SelectedToolbarColorPicker';

class Toolbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = this.setInitialState();

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this); 
  }

  setInitialState() {
    return {
      selected: 'pencil',
      columns: 1,
      iconSize: 36,       /* pixels, includes padding */
    };
  }

  handleSelectionChange(tool) {
    this.setState({selected: tool});
    this.props.handleToolChange(tool);
  }

  handleExpand() {
    this.setState({columns: 2});
  }

  handleCollapse() {
    this.setState({columns: 1});
  }

  render() {
    return (
      <Draggable handle='.Toolbar-drag' bounds='body'>
        <div className="Toolbar" style={{ width: this.state.columns * this.state.iconSize + 8, left: 10, top: 50 }}>
          <div className="Toolbar-drag"></div>
          <ToolbarExpander handleExpand={this.handleExpand} handleCollapse={this.handleCollapse} />
          {
            React.Children.map(this.props.children, (child, i) => {
              const isSelected = child.props.tool === this.state.selected;
              return React.cloneElement(child, {selected: isSelected, handleSelectionChange: this.handleSelectionChange, style: {width: this.state.iconSize + 'px' } });
            })
          }
          <SelectedToolbarColorPicker />
        </div>
      </Draggable>
    );
  }
}

export default Toolbar;
