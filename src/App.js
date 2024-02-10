import React from "react"
import ReactDOM from "react";
import './App.css';

class counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    };
  }

  increment(){
    this.setState((preValue) => ({count : preValue.count + 1 }));
  }
  decrement(){
    this.setState((preValue) => ({count : preValue.count - 1 }));
  }

  render(){

    return (
      <div className="box">
        <button onClick={()=>this.increment()} >+</button>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.decrement()}>-</button>

      </div>
    );

  }
}

export default counter

