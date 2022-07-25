import React from 'react';
function Counter(){
    const [count,setCount]=React.useState(0);
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    )
}
export default Counter;