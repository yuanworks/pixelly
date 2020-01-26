import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './Window.css';

class Window extends Component {
  
  constructor(props) {
    super(props);

    this.state = { visible: this.props.defaultVisible? this.props.defaultVisible : false };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({visible: false});
  }
  
  render() {
    return (
      <Draggable handle='.Window-title' bounds='body'>
      <div className={"Window " + (!this.state.visible ? 'Window-is-closed' : '') } style={{right: 10}}>
        <div className="Window-title">{this.props.title? this.props.title : ''}
          <span className="Window-close" onClick={this.handleClose}>&times;</span>
        </div>
        <div className="Window-content">CONTENT</div>
      </div>
      </Draggable>
    );
  }
}

export default Window;