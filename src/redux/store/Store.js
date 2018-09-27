import thunk from "redux-thunk";
import logger from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';

/* Combine all reducers together */
const AppReducers = combineReducers({});

/* Set root reducer to combined reducers */
const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

/* Create Initial Redux Store */
let store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
export default store;
