import React, { useState } from 'react';
import { orderBurger } from './redux/burger/BurgerActions';
import {connect} from 'react-redux';



function CustomerOrder(props) {
    const [number, setNumber]=useState(1)
    console.log(props);
  return (
    <div className='container'>
      <h1>Number of BurgerBuns = {props.burgerBuns}</h1>
      <input type='Number'className='input-field' value ={number} placeholder='Enter Number' onChange={e=>setNumber(e.target.value)}/>
      <button className='button' onClick={()=>props.orderBurger(number)}>Order Burger</button>
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
        orderBurger:(number)=>dispatch(orderBurger(number))
    }
  }


export default connect (mapStateToProps,mapDispatchToProps)(CustomerOrder)