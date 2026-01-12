import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes";
import axios from 'axios'

export function fetchRequest(){
    return {
        type: FETCH_REQUEST
    }
}

export function fetchSuccess(products){
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

export function fetchError(errMsg){
    return {
        type: FETCH_ERROR,
        payload: errMsg
    }
}

// Thunk Action creator
export function fetchProducts(){
    return (dispatch)=>{
        dispatch(fetchRequest())
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            const products = res.data.map(product=>product.title)
            dispatch(fetchSuccess(products))
        }).catch(err => {
            const errMsg = err.message;
            dispatch(fetchError(err.message))
        }
            
        )
    }
}



