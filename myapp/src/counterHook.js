import React from 'react';
function useCounterHook(){
    const [count,setCount]=React.useState(1);
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    function reset(){
        setCount(1)
    }
    return [count,inc,dec,reset]
}
export default useCounterHook;