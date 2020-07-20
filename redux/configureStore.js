import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const initialState = {
  message: 'foo'
}

const main = (state=initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUBMIT_FAILED':
      return { ...state, message: action.message}
    default: 
      return state
  } 
}

export const configureStore = () => {
    const store = createStore(
        combineReducers({
         main
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}