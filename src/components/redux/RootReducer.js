import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducer";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer
})