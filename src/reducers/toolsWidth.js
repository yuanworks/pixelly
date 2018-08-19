export const pencilWidth = (state = 1, action) => {
  switch (action.type) {
    case 'SET_PENCIL_WIDTH':
      return action.width;

    default:
      return state;
  }
};

export const eraserWidth = (state = 4, action) => {
  switch (action.type) {
    case 'SET_ERASER_WIDTH':
      return action.width;

    default:
      return state;
  }
};
