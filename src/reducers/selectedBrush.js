import { Brushes } from '../actions';

const selectedBrush = (state = Brushes.PENCIL, action) => {
  switch (action.type) {
    case 'SET_SELECTED_BRUSH':
      return action.brush;
    
    default:
      return state;
  }
};

export default selectedBrush;