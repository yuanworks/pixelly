const pencilWidth = (state = 1, action) => {
  switch (action.type) {
    case 'SET_PENCIL_WIDTH':
      return action.width;
    
    default:
      return state;
  }
};

export default pencilWidth;