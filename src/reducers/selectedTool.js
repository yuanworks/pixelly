import { Tools } from '../actions';

const selectedTool = (state = Tools.PENCIL, action) => {
  console.log("Selected Tool: ", state);
  switch (action.type) {
    case 'SET_SELECTED_TOOL':
      return action.tool;
    
    default:
      return state;
  }
};

export default selectedTool;