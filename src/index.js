import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import App from './App';

//Devtools for viewing state changes in browser
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);