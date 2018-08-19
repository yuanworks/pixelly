/* HELPER FUNCTIONS */
import { Tools, setPencilWidth, setEraserWidth, unknownToolWidth } from './';

export function toolWidth(state) {
  switch (state.selectedTool) {
    case Tools.PENCIL:
      return state.pencilWidth;
    
    case Tools.ERASER:
      return state.eraserWidth;

    default:
      return 1;
  }
}

export function setToolWidth(selectedTool, value) {

  switch (selectedTool) {
    case Tools.PENCIL:
      return setPencilWidth(value);
    
    case Tools.ERASER:
      return setEraserWidth(value);

    default:
      return unknownToolWidth(value);
  }
}