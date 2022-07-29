import React from 'react'
import {connect} from 'react-redux'
import { useLocation, useParams } from 'react-router'

function FoodItems(props) {
    console.log(props)
    var x = useParams();
    console.log(x.rname);

    React.useEffect(()=>{
        props.dispatch({type:'RESTAURANT_FOOD',payload:x.rname})
    },[x.rname])
  return (
    <div>
        <h1>FoodItems of {x.rname}</h1>
        <div className='d-flex flex-wrap justify-content-between'>
            {
                props.selectedRestaurantFoodItems && props.selectedRestaurantFoodItems.map((foodItem)=>{
                    return (<div className='w-25'>
                        {foodItem.foodName}
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default connect((store)=>{return store})(FoodItems)