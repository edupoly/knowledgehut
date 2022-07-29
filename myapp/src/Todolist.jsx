import React from 'react'
import {connect} from 'react-redux';
function Todolist(props) {
    console.log(props)
    const [newtodo, setnewtodo] = React.useState('')
    
    var handleChange = (e)=>{
        setnewtodo(e.target.value)
    }
  return (
    <div className="betterview">
        <h1>Todolist</h1>
        <input type="text" onChange={handleChange}/>
        <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add Todo</button>
        {
            props.todos.map((todo)=>{
                return (<li>{todo}</li>)
            })
        }
    </div>
  )
}

export default connect((store)=>{return store})(Todolist)