import { combineReducers } from 'redux';
import selectedTool from './selectedTool';
import foreColor from './foreColor';
import backColor from './backColor';

export default combineReducers({
  selectedTool,
  foreColor,
  backColor
});