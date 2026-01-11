
import { ORDER_PIZZA } from "./PizzaTypes";

const initialState={
    pizzaBase:500
}

function pizzaReducer(state=initialState, action){
    switch(action.type){
        case ORDER_PIZZA:
            return {
                pizzaBase : state.pizzaBase-1
            }
        default:
            return state
    }
}

export default pizzaReducer