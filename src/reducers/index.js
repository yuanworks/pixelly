import { combineReducers } from 'redux';
import selectedTool from './selectedTool';
import foreColor from './foreColor';
import backColor from './backColor';
import { pencilWidth, eraserWidth } from './toolsWidth';

export default combineReducers({
  selectedTool,
  foreColor,
  backColor,
  pencilWidth,
  eraserWidth
});