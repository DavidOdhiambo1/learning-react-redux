import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './redux/product/ProductActions'

function ProductView({productsData, fetchProducts}) {
    console.log(productsData)

    useEffect(
        ()=>{fetchProducts()}, []
    )
  return (
    <div>
      {productsData.loading && <p>Loading...</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && <p>{productsData.products.map(title=><p>{title}</p>)}</p>}
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
