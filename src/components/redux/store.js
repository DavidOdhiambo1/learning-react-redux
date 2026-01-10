import {createStore } from 'redux'
import reducer from './pizza/PizzaReducers'



export const store = createStore(reducer)
