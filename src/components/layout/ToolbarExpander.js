import React, { Component } from 'react';
import './ToolbarExpander.css';

class ToolbarExpander extends Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false };

    this.renderIcon = this.renderIcon.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  renderIcon() {
    return (this.state.expanded? '«' : '»');
  }

  handleToggle() {

    this.setState(function(prevState) {

      if (prevState.expanded)
        this.props.handleCollapse();
      else
        this.props.handleExpand();
      
      return { expanded: !prevState.expanded };
    });
  }

  render() {
    return (
      <div className="ToolbarExpander"><span className="ToolbarExpander-icon" onClick={this.handleToggle} >{this.renderIcon()}</span></div>
    )
  }
}

export default ToolbarExpander;