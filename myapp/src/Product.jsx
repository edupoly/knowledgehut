import React from 'react'
import { Link } from 'react-router-dom'
import products from './products'
function Product() {
  return (
    <div className='betterview'>
        <h1>Product</h1>
        {
            products.products.map((product)=>{
                return (
                    <li>
                        <Link to={`/productDetails/${product.id}`}>{product.title}</Link>
                        
                    </li>
                )
            })
        }
    </div>
  )
}

export default Product