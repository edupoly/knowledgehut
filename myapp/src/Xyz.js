import React from 'react';
function Xyz(props){
    return(
        <div className='betterview'>
            <h2>Xyz Component</h2>
            <h1>{props.myname}</h1>
        </div>
    )
}
export default Xyz;