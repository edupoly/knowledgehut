import React from 'react'

function Counter(props) {
    console.log("counter rendered");
    return (
        <div>
            <h1>Counter:{props.x}</h1>
        </div>
    )
}

export default React.memo(Counter)