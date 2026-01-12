import {createStore, applyMiddleware} from 'redux'
import { rootReducer } from './RootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk } from 'redux-thunk';
import productReducer from './product/ProductReducer';





export const store = createStore(productReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
