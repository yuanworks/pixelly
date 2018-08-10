const pencilWidth = (state = 1, action) => {
  switch (action.type) {
    case 'SET_TOOL_WIDTH':
      return action.width;
    
    default:
      return state;
  }
};

export default pencilWidth;