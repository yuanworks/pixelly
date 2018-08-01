import React, { Component } from 'react';
import './ToolbarColorPicker.css';

class ToolbarColorPicker extends Component {

  constructor(props) {
    super(props);

    this.handleForeColorClick = this.handleForeColorClick.bind(this);
    this.handleBackColorClick = this.handleBackColorClick.bind(this); 
  }
  handleForeColorClick() {
    let color;

    if ((color = prompt("Forecolor?", this.props.foreColor )))
      this.props.onChangeForeColor(color);
  }

  handleBackColorClick() {
   let color;
    
    if ((color = prompt("Backcolor?", this.props.backColor )))
      this.props.onChangeBackColor(color);
  }

  render() {
    return (
      <div className="ToolbarColorPicker">

        <div className="ToolbarColorPicker-color-container ToolbarColorPicker-color-back">
          <div className="ToolbarColorPicker-color" style={{ backgroundColor: this.props.backColor }} onClick={this.handleBackColorClick} ></div>
        </div>

        <div className="ToolbarColorPicker-color-container ToolbarColorPicker-color-front">
          <div className="ToolbarColorPicker-color" style={{ backgroundColor: this.props.foreColor }} onClick={this.handleForeColorClick}></div>
        </div>

      </div>
    );
  }
}

export default ToolbarColorPicker;