import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Container from './components/Container';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    root)
}


