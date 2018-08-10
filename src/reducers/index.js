import { combineReducers } from 'redux';
import selectedTool from './selectedTool';
import foreColor from './foreColor';
import backColor from './backColor';
import pencilWidth from './pencilWidth';

export default combineReducers({
  selectedTool,
  foreColor,
  backColor,
  pencilWidth
});