import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';



export const initializeStore = (preloadedState = {}) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  )
}

