import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//redux 
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <Provider store={store}>
  <App />
</Provider>
);
