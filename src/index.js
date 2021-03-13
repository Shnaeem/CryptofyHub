import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import reportWebVitals from './reportWebVitals';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

  render(
  <React.StrictMode>

    <Provider store = {store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
