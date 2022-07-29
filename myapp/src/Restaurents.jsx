import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
function Restaurents(props){
    console.log(props)
  return (
    <div>
        <h1>Restaurents</h1>
        <div className='d-flex flex-wrap justify-content-between'>
            
            {
                props.allRestaurents.map((restaurent)=>{
                    return (
                        <div className='m-3 w-25 border border-thin'>
                            <Link to="/foodItems" state={restaurent}>{restaurent.restaurant}</Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
export default connect((store)=>{return store})(Restaurents)