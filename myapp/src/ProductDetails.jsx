import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function ProductDetails() {

    const params = useParams()
    const [product, setproduct] = React.useState({})
    React.useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then(data=>{
            setproduct(data);
        });

    },[params])
  return (
    <div>
        <h1>ProductDetails</h1>
        <div style={{display:'flex'}}>
            <div>
                <img src={product.thumbnail} alt="" />
            </div>
            <div>
                <h1>{product.brand}</h1>
                <h1>{product.category}</h1>
                <h1>{product.title}</h1>
            </div>
        </div>
    </div>
  )
}
// brand: "Infinix"
// category: "laptops"
// description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty"
// discountPercentage: 11.83
// id: 9
// images: Array(5)
// 0: "https://dummyjson.com/image/i/products/9/1.jpg"
// 1: "https://dummyjson.com/image/i/products/9/2.png"
// 2: "https://dummyjson.com/image/i/products/9/3.png"
// 3: "https://dummyjson.com/image/i/products/9/4.jpg"
// 4: "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
// length: 5
// [[Prototype]]: Array(0)
// price: 1099
// rating: 4.54
// stock: 96
// thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
// title: "Infinix INBOOK"