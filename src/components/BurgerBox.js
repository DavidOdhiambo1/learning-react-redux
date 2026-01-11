import React from 'react';
import { orderBurger } from './redux/burger/BurgerActions';
import {connect} from 'react-redux';



function BurgerBox(props) {
    console.log(props);
  return (
    <div className='container'>
      <h1>Number of BurgerBuns = {props.burgerBuns}</h1>
      <button className='button' onClick={props.orderBurger}>Order Burger</button>
    </div>
  )
}

  const mapStateToProps =(state)=>{
    return {
        burgerBuns: state.burger.burgerBuns
    }
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
        orderBurger:()=>dispatch(orderBurger())
    }
  }


export default connect (mapStateToProps,mapDispatchToProps)(BurgerBox)
