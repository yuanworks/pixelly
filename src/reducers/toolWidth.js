import { Tools } from '../actions';

const toolWidth = (state = { tool: Tools.PENCIL, width: 1 }, action) => {
  switch (action.type) {
    case 'SET_TOOL_WIDTH':
      return {tool: action.tool, width: action.width};
    
    default:
      return state;
  }
};

export default toolWidth;