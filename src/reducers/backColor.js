import { Colors } from '../actions';

const backColor = (state = Colors.WHITE, action) => {
  switch (action.type) {
    case 'SET_BACK_COLOR':
      return action.backColor;
    
    default:
      return state;
  }
};

export default backColor;