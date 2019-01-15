import React, { Component } from 'react';
import './App.css';

import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      toDoList:[],
      userInput:''
    }
  }
handleChange(value){
  this.setState({userInput:value})
}
addToDoList(userInput){
var theList = [...this.state.toDoList]
theList.push(userInput)
this.setState({userInput:'', toDoList: theList})
}
  render() {
    console.log(this.state)
    let totalList = this.state.toDoList.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })
    return (
      <div className='App'>
        <h1>My To-Do List:</h1>
          <input value={this.state.userInput} onChange = {(e) =>  this.handleChange(e.target.value)} ></input>
          <button onClick = {()=>{this.addToDoList(this.state.userInput)}}>Add</button>
        {totalList}
      </div>
    );
  }
}

export default App;
