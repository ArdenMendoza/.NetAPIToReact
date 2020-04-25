import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import MainPage from './pages/MainPage';
import { Container } from '@material-ui/core';


function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
