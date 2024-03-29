import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
  data: {
    filters: [],
    rows: []
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UpdateTeachersList":
      console.log(action.data);
      return { ...state, data: action.data };

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
