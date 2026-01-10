import { orderPizza } from "./PizzaActions";
import { ORDER_PIZZA } from "./PizzaTypes";

const initialState={
    pizzaBase:500
}

function reducer(state=initialState, action){
    switch(action.type){
        case ORDER_PIZZA:
            return {
                pizzaBase : state.pizzaBase-1
            }
        default:
            return state
    }
}

export default reducer