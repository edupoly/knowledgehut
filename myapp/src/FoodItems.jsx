import React from 'react'
import { useLocation } from 'react-router'

function FoodItems() {
    var restaurant = useLocation()
    console.log(restaurant)
  return (
    <div>
        <h1>FoodItems of {restaurant.state.restaurant}</h1>

    </div>
  )
}

export default FoodItems