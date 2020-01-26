import React, { Component } from 'react';

import CanvasEditor from './../../scripts/editor/CanvasEditor';
import './Canvas.css';

class Canvas extends Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.canvasRef = React.createRef();

    /* temporary */
    console.log("TEMPORARY");
    this.originx = 0;
    this.originy = 0;
    this.scale = 1;
    this.handleMouseWheel = this.handleMouseWheel.bind(this);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.pencilDraw = this.pencilDraw.bind(this);
  }

  getInitialState() {
    return {
      mouseIsDown: false,
      mouseButton: 'left',  /* 'left' or 'right' */
      lastX: 0,
      lastY: 0,
      canvasContext: null,
      canvasEditor: null,
      color: '#000',
      baseZIndex: 10
    }
  }
  
  componentDidMount() {
    const canvas = this.canvasRef;
    this.canvasContext = this.canvasRef.current.getContext("2d");
    const ctx = this.canvasContext;

    this.canvasEditor = new CanvasEditor(canvas, ctx);
    
    if (this.props.bgLayer) {
      this.canvasEditor.fillCheckered(16);
    }

    /*
    ctx.fillStyle = "white";
    ctx.font = "40px Courier";
    ctx.fillText("Well hello there...", 50, 50);
    */
  }

  handleMouseDown(e) {
    
    let color;

    if (e.ctrlKey || e.button === 2) {
      color = this.props.backColor;
    }
    else if (e.button === 0) {
      color = this.props.foreColor;
    }

    this.canvasContext.fillStyle = color;
    
    if (this.props.tool === 'pencil') {
      this.canvasContext.fillRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, this.props.pencilWidth, this.props.pencilWidth);
    }
    else if (this.props.tool === 'eraser') {
      this.canvasContext.clearRect(e.nativeEvent.offsetX, e.nativeEvent.offsetY, this.props.eraserWidth, this.props.eraserWidth);
    }

    this.setState({mouseIsDown: true, button: this.getMouseButton(e.button)});
  }

  handleMouseUp(e) {
    this.setState({mouseIsDown: false, lastX: 0, lastY: 0});

    if (this.props.tool === 'fill') {
      let color;

      if (e.ctrlKey || e.button === 2) {
        color = this.props.backColor;
      }
      else if (e.button === 0) {
        color = this.props.foreColor;
      }
 
      this.canvasContext.fillStyle = color;
      this.canvasContext.fillRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
    }

    else if (this.props.tool === 'picker') {
      const imgData = this.canvasContext.getImageData(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 1, 1);
      const red = imgData.data[0];
      const green = imgData.data[1];
      const blue = imgData.data[2];
      const alpha = imgData.data[3];
      console.log(red + " " + green + " " + blue + " " + alpha);

      const hexColor = this.rgbToHex(red,green,blue);

      switch (e.button) {
        case 0: // left
        default:
          this.props.onChangeForeColor(hexColor);
          break;
        
        case 2: // right
        this.props.onChangeBackColor(hexColor);
          break;
      }
    }

    return false;
  }

  rgbToHex(r,g,b) {
    return "#" + this.colorToHex(r) + this.colorToHex(g) + this.colorToHex(b);
  }

  colorToHex(color) { 
    let hex = Number(color).toString(16);
    
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  handleMouseMove(e) {

    if (!this.state.mouseIsDown)
      return;

    switch (this.props.tool) {
      
      case 'pencil':
        this.pencilDraw(this.canvasContext, e.nativeEvent.offsetX, e.nativeEvent.offsetY, this.props.pencilWidth);
        break;

      case 'eraser':
        this.pencilDraw(this.canvasContext, e.nativeEvent.offsetX, e.nativeEvent.offsetY, this.props.eraserWidth, true);
        break;

      default:
    }
  }

  handleMouseWheel(event) {

    const canvas = this.canvasRef;
    const context = this.canvasContext;
    
    var mousex = event.nativeEvent.clientX - canvas.offsetLeft;
    var mousey = event.nativeEvent.clientY - canvas.offsetTop;
    var wheel = event.nativeEvent.wheelDelta/120;//n or -n

    var zoom = 1 + wheel/2;

    context.translate(
        this.originx,
        this.originy
    );

    context.scale(zoom,zoom);
    context.translate(
        -( mousex / this.scale + this.originx - mousex / ( this.scale * zoom ) ),
        -( mousey / this.scale + this.originy - mousey / ( this.scale * zoom ) )
    );

    this.originx = ( mousex / this.scale + this.originx - mousex / ( this.scale * zoom ) );
    this.originy = ( mousey / this.scale + this.originy - mousey / ( this.scale * zoom ) );
    this.scale *= zoom;

    context.imageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;

    context.drawImage(this.canvasRef.current,
      Math.min(Math.max(0, 0), this.canvasRef.current.width - 10),
      Math.min(Math.max(0, 0), this.canvasRef.current.height - 10),
      10, 10,
      0, 0,
      200, 200);
}

  getColor() {
    if (this.state.mouseButton === 'left')
      return
  }

  getMouseButton(button) {
    if (button === 0)
      return 'left';

    else if (button === 2)
      return 'right';
  }

  render() {
    return (
      <canvas className="Canvas" style={{zIndex: parseInt(this.props.zIndex, 10) + this.state.baseZIndex}}
              width={this.props.width} height={this.props.height} ref={this.canvasRef}
              onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onWheel={this.handleMouseWheel}
              onContextMenu={(e)=>  {e.preventDefault(); return false;}} ></canvas>
    );
  }



  /* Helper functions */
  pencilDraw(ctx,x,y,size, eraser = false) {

    const lastX = this.state.lastX;
    const lastY = this.state.lastY;

    if (lastX && lastY && (x !== lastX || y !== lastY)) {
      /*
      ctx.fillStyle = "white";
      console.log("one", ctx.fillStyle);
      ctx.lineWidth = 1 * size;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.strokeStyle="white";
      ctx.stroke();
      */

      this.drawLineNoAliasing(ctx, lastX, lastY, x, y, size, eraser);
    }

    /*
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    */
    this.setState({lastX: x, lastY: y});
    
    /*lastY = y;*/
  }

  DBP(x1,y1,x2,y2) {
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  }

    // finds the angle of (x,y) on a plane from the origin
  getAngle(x,y) { return Math.atan(y/(x===0?0.01:x))+(x<0?Math.PI:0); }

  // the function
  drawLineNoAliasing(ctx, sx, sy, tx, ty, strokeWidth, eraser = false) {
    var dist = this.DBP(sx,sy,tx,ty); // length of line
    var ang = this.getAngle(tx-sx,ty-sy); // angle of line
    for(var i=0;i<dist;i++) {
        // for each point along the line
        if (!eraser) {
          ctx.fillRect(Math.round(sx + Math.cos(ang)*i), // round for perfect pixels
          Math.round(sy + Math.sin(ang)*i), // thus no aliasing
          strokeWidth, strokeWidth); // fill in one pixel, 1x1
        }
        else {
          ctx.clearRect(Math.round(sx + Math.cos(ang)*i), // round for perfect pixels
          Math.round(sy + Math.sin(ang)*i), // thus no aliasing
          strokeWidth, strokeWidth); // fill in one pixel, 1x1
        }

    }
  }
}

export default Canvas;