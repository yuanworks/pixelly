import React, { Component } from 'react';
import './ToolbarInput.css';

class ToolbarInput extends Component {

  render() {
    return (
      <input className="ToolbarInput" type="text" value={this.props.value} />
    )
  }
}

export default ToolbarInput;