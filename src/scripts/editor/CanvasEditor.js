class CanvasEditor {

  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;

    this.fillCheckered = this.fillCheckered.bind(this);
  }

  fillCheckered(width, height) {
    
    if (typeof height === 'undefined')
      height = width;

    let cols = this.canvas.current.width / width;
    let rows = this.canvas.current.height / height;

    for (let i = 0; i < cols; ++i) {
      for (let j = 0; j < rows; ++j) {
        this.context.fillStyle = (( (i + j) % 2) ? /*"#fff" : "#eee"); //*/ "#222" : "#111");
        this.context.fillRect(i*width, j*height, width, height);
      }
    }
  }
}

export default CanvasEditor;