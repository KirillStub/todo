const redux = require('redux');
const reducers = require('../reducers');

module.exports = function() {
  const initState = {
    todos: [
      {text: 'Wake up', completed: true},
      {text: 'To drink coffee', completed: false}
    ]
  };
  const store = redux.createStore(reducers, initState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
};
