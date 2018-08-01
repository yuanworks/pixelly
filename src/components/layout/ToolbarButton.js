import React, { Component } from 'react';

import './ToolbarButton.css';

import pencil from './../../assets/icons/pencil.svg';
import eraser from './../../assets/icons/eraser.svg';
import picker from './../../assets/icons/picker.svg';
import selector from './../../assets/icons/selector.svg';
import fill from './../../assets/icons/fill.svg';

class ToolbarButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleClick() {
    this.props.handleSelectionChange(this.props.tool);
  }

  renderButton() {
    
    switch (this.props.tool) {
      case 'pencil':
        return pencil;

      case 'eraser':
        return eraser;
      
      case 'picker':
        return picker;

      case 'selector':
        return selector;

      case 'fill':
        return fill;

      default:
        return "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    }
  }

  render() {
    return (
        <div className={"ToolbarButton" + (this.props.selected? ' ToolbarButton-selected' : ' ')} onClick={this.handleClick} style={this.props.style}>
          <img src={this.renderButton()} alt="Edit" draggable="false" />
        </div>
    );
  }
}

export default ToolbarButton;
