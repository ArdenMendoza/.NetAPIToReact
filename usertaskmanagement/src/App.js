import React from 'react';
import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import MainPage from './pages/MainPage';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <MainPage />
      </ToastProvider>
    </Provider>
  );
}

export default App;
