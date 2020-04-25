import React from 'react';
import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import MainPage from './pages/MainPage';


function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
