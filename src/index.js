import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './components/App';
import Main from './components/Main';
import Task from './containers/Task';
import { Router, browserHistory } from 'react-router';

const isInt = (value) => {
  return !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10));
};

const store = configureStore();
const routes = {
  path: '/',
  component: App,
  indexRoute: {component: Main},
  childRoutes: [
    {
      path: '/(:id)',
      component: Task,
      onEnter: ({ params }, replace) => {
        if (!isInt(params.id) || params.id >= store.getState().todos.length) {
          replace('/');
        }
      }
    },
    {path: '*', onEnter: ({ params }, replace) => replace('/')}
  ]
};

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
