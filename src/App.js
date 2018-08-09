import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import MainEditor from './components/MainEditor';
import './App.css';

const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <MainEditor />
      </Provider>
    );
  }
}

export default App;

// Testing store:
/*
console.log(store.getState());
store.dispatch({type: 'SET_SELECTED_BRUSH', brush: 'picker'});
console.log(store.getState());
*/