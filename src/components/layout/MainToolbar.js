import React, { Component } from 'react';
import './MainToolbar.css';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

function log(value) {
  console.log(value);
}

class MainToolbar extends Component {
  render() {
    return (
      <div className="MainToolbar">
        <div style={{display: "inline-block"}}>Border:</div>
        <input className="MainToolbar-input" type="text" name="border-width" />
        <div className="MainToolbar-slider">
          <Slider min={1} max={20} defaultValue={1} onAfterChange={log} railStyle={{backgroundColor: '#948e8e'}} handleStyle={{backgroundColor: '#e9e9e9', borderColor: '#e9e9e9'}} dotStyle={{color: '#fff'}} />
        </div>
      </div>
    )
  }
}

export default MainToolbar;