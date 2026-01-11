import { ORDER_BURGER } from "./BurgerTypes";

const initialState = {
    burgerBuns: 200
}

function burgerReducer(state=initialState, action){
    switch(action.type){
        case ORDER_BURGER:
            return {
                burgerBuns:state.burgerBuns -1
            }
        default:
            return state
    }
    

}

export default burgerReducer