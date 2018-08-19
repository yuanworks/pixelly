import React, { Component } from 'react';
import './MainToolbar.css';
import 'rc-slider/assets/index.css';
import PencilWidthWrapper from '../../containers/PencilWidthWrapper';
import PencilWidthSlider from '../../containers/PencilWidthSlider';

class MainToolbar extends Component {
  render() {
    return (
      <div className="MainToolbar">
        <div style={{display: "inline-block"}}>Border:</div>
        <PencilWidthWrapper />
        <div className="MainToolbar-slider">
          <PencilWidthSlider  min={1} max={20} defaultValue={this.props.defaultValue} railStyle={{backgroundColor: '#948e8e'}} handleStyle={{backgroundColor: '#e9e9e9', borderColor: '#e9e9e9'}} dotStyle={{color: '#fff'}} />
        </div>
      </div>
    )
  }
}

export default MainToolbar;