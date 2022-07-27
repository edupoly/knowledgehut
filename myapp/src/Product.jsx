import React from 'react'
import products from './products'
function Product() {
  return (
    <div className='betterview'>
        <h1>Product</h1>
        {
            products.products.map((product)=>{
                return (
                    <li>
                        {product.title}
                        <img src={product.thumbnail} alt="" />
                    </li>
                )
            })
        }
    </div>
  )
}

export default Product