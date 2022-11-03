import './App.css';
import React, { Component } from "react"

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      item: "",
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(){
    const { item } = this.state 
    this.setState ({ 
      item: this.state.item
    })
  }

  render(){
    return (
      <div>
        <input></input>
        <button onClick={this.addToo}>Submit</button>
      </div>
    )
  }
}

export default App;
