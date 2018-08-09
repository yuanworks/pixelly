import { Colors } from '../actions';

const foreColor = (state = Colors.BLACK, action) => {
  switch (action.type) {
    case 'SET_FORE_COLOR':
      return action.foreColor;
    
    default:
      return state;
  }
};

export default foreColor;