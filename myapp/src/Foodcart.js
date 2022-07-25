import React, { useEffect, useState } from 'react';
import foodItems from './foodItems';
export default function Foodcart() {
    React.useEffect(()=>{
        console.log(foodItems)
    },[])
  return (
    <div>
        Foodcart
        {
            foodItems.map((item)=>{
                return(
                    <li>{item.title}</li>
                )
            })
        }
    </div>
  )
}
