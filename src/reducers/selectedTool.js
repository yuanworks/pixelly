import { Tools } from '../actions';

const selectedTool = (state = Tools.PENCIL, action) => {
  switch (action.type) {
    case 'SET_SELECTED_Tool':
      return action.tool;
    
    default:
      return state;
  }
};

export default selectedTool;