import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import { rootReducer } from './reducers'

const logMiddleware = () => next => action => {
  return next(action);
};

const stringMiddleware = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }

  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

export default store;