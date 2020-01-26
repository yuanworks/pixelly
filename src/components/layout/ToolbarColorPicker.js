import React, { Component } from 'react';
import './ToolbarColorPicker.css';
import { ChromePicker } from 'react-color';

class ToolbarColorPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerOpen          : false,
      pickerColorPosition : '',
    };

    this.handleForeColorClick = this.handleForeColorClick.bind(this);
    this.handleBackColorClick = this.handleBackColorClick.bind(this);
    this.handleChangePickerColor = this.handleChangePickerColor.bind(this);
    this.checkPickerClick = this.checkPickerClick.bind(this);

    this.swatchRef = React.createRef();
    this.colorPickerRef = React.createRef();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.checkPickerClick);
  }

  handleForeColorClick() {
    this.setState({
      pickerColorPosition : 'fore',
      pickerOpen          : true,
    });
    
    document.addEventListener('mousedown', this.checkPickerClick);
  }

  handleBackColorClick() {
    this.setState({
      pickerColorPosition : 'back',
      pickerOpen          : true,
   });

   document.addEventListener('mousedown', this.checkPickerClick);
  }

  checkPickerClick(e) {
    if (this.colorPickerRef.current && !this.colorPickerRef.current.contains(e.target)) {
      document.removeEventListener('mousedown', this.checkPickerClick);
      this.setState({ pickerOpen: false });
    }
  }

  handleChangePickerColor(color) {
    
    const { onChangeBackColor, onChangeForeColor } = this.props;

    const { pickerColorPosition } = this.state;
    const { hex } = color;

    if (pickerColorPosition === 'fore') {
      onChangeForeColor(hex);
    }
    else {
      onChangeBackColor(hex);
    }
  }

  renderPicker() {

    const { pickerColorPosition } = this.state;
    const { foreColor, backColor } = this.props;

    const boundingBox = this.swatchRef && this.swatchRef.current.getBoundingClientRect();

    const pickerTop = boundingBox && boundingBox.top;
    const pickerLeft = boundingBox && boundingBox.right;

    return (
      <div style={{position: 'absolute', top: pickerTop, left: pickerLeft, zIndex: 1000}} ref={this.colorPickerRef}>
        <ChromePicker color={pickerColorPosition === 'fore' ? foreColor : backColor } onChange={this.handleChangePickerColor} />
      </div>
    );
  }

  render() {
    const { pickerOpen } = this.state;

    return (
      <>
        <div className="ToolbarColorPicker" ref={this.swatchRef}>

          <div className="ToolbarColorPicker-color-container ToolbarColorPicker-color-back">
            <div className="ToolbarColorPicker-color" style={{ backgroundColor: this.props.backColor }} onClick={this.handleBackColorClick} ></div>
          </div>

          <div className="ToolbarColorPicker-color-container ToolbarColorPicker-color-front">
            <div className="ToolbarColorPicker-color" style={{ backgroundColor: this.props.foreColor }} onClick={this.handleForeColorClick}></div>
          </div>

        </div>

        { pickerOpen && this.renderPicker() }
      </>
    );
  }
}

export default ToolbarColorPicker;