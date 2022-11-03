import './App.css';
import React, { Component } from "react"
import Overview from './Components/Overview';

class App extends Component {
  constructor(){
    super()

    this.state ={
      tasks: ["",]
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(event){
    this.setState ({ 
      tasks: event.target.value
    })

    console.log(this.state)
  }

  render(){
    return (

      <div>
      <ul>
          <li>{this.state.tasks}</li>
      </ul>
      <input onChange = {this.addTodo} value = {this.state.tasks}></input>
      <button onClick = {this.addTodo} value={this.state.tasks}>Click</button>
  </div>
)

      // <div>
      //   <Overview onChange = {this.addTodo} value = {this.state.item} />
      // </div>
  
  }
}

export default App;
