import React, {Component} from 'react';
import './Artboard.css';
import Canvas from './Canvas';

class Artboard extends Component {

  render() {
    return (
      <div className="Artboard">
        <div className="Artboard-canvas" style={{width: '800px', height: '600px', overflow: 'auto', position: 'relative'}}>
          <Canvas width='800' height='600' {...this.props} zIndex='1' />
          <Canvas width='800' height='600' {...this.props} bgLayer='true' zIndex='0' />
        </div>
      </div>
    )
  }
}

export default Artboard;