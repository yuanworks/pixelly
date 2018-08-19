import React, { Component } from 'react';
import './ToolbarInput.css';

class ToolbarInput extends Component {

  render() {
    return (
      <input className="ToolbarInput" type="text" value={this.props.value} onChange={this.props.onChange} />
    )
  }
}

export default ToolbarInput;