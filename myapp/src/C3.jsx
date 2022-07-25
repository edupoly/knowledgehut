import React from 'react'
import mycontext from './MyContext'
export default function C3() {
    const val = React.useContext(mycontext)
    return (
        <div className='betterview'>
            <h1>C3</h1>
            <h1>{val.name}</h1>
            <h1>{val.place}</h1>
            <h1>{val.food}</h1>
        </div>
    )
}
// class component===>state//statefull//smart
// functional component====>statless//presentational or dumb

//16.8===>hooks===>useState