import React, { Component } from 'react'
import mycontext from './MyContext'
export default class CC1 extends Component {
  render() {
    return (
        <mycontext.Consumer>
            {
                (val)=>{
                    return(
                        <div className='betterview'>
                            <h1>{val.name}</h1>
                            <h1>{val.food}</h1>
                            <h1>{val.place}</h1>
                        </div>
                    )
                }
            }
        </mycontext.Consumer>
    //   
    )
  }
}
