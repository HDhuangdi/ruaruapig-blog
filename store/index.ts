import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

let enhancer;

if (process.browser) {
  enhancer = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({})
      : null,
    applyMiddleware(thunk)
  );
} else {
  enhancer = compose(applyMiddleware(thunk));
}

// @ts-ignore
const store = createStore(reducer, enhancer);

export default store;
