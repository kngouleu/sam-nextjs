import storage from 'redux-persist/lib/storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'],
};


export default rootReducer;
