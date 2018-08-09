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
      <MainEditor />
    );
  }
}

export default App;
