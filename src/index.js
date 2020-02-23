import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Container from './components/Container';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    root)
}


