import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducer";
import productReducer from "./product/ProductReducer";

export const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productReducer
})