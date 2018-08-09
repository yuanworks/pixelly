import React, { Component } from 'react';
import './MainToolbar.css';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

class MainToolbar extends Component {
  render() {
    return (
      <div className="MainToolbar">
        <Slider min={1} />
      </div>
    )
  }
}

export default MainToolbar;