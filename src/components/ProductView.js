import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './redux/product/ProductActions'

function ProductView({productsData, fetchProducts}) {
    

    useEffect(()=>{
        fetchProducts()
    }, [] )
  return (
    <div>
      {productsData.loading && <p>Loading...</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && <div>{productsData.products.map(product=><p >{product}</p>)}</div>}
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        productsData : state.product

    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchProducts : ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
