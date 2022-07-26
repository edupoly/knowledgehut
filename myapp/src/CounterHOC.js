import React from 'react';
export default function CounterHOC(MyComponent){
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state={
                count:1
            }
        }
        increment=()=>{
            this.setState({count:this.state.count+1})
        }
        decrement=()=>{
            this.setState({count:this.state.count-1})
        }
        reset=()=>{
            this.setState({count:0})
        }
        render(){
            return(
                <MyComponent count={this.state.count} inc={this.increment} dec={this.decrement} reset={this.reset}></MyComponent>
            )
        }
    }
    return NewComponent
}