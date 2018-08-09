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
        <div style={{width: 100}}>
          <Slider min={1} max={20} defaultValue={1} onAfterChange={log} handleStyle={{backgroundColor: '#404040', borderColor: '#e9e9e9'}} dotStyle={{color: '#fff'}} />
        </div>
      </div>
    )
  }
}

export default MainToolbar;