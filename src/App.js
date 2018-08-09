import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import MainEditor from './components/MainEditor';
import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


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