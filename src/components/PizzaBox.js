import React from 'react';
import { orderPizza } from './redux/pizza/PizzaActions';
import {connect} from 'react-redux';



function PizzaBox(props) {
    console.log(props);
  return (
    <div className='container'>
      <h1>Number of pizzabase = {props.pizzaBase}</h1>
      <button className='button' onClick={props.orderPizza}>Order Pizza</button>
    </div>
  )
}

  const mapStateToProps =(state)=>{
    return {
        pizzaBase:state.pizza.pizzaBase
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
        orderPizza:()=>dispatch(orderPizza())
    }
  }


export default connect (mapStateToProps,mapDispatchToProps)(PizzaBox)
