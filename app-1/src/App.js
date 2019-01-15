import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      textBox: null
    }
  }
  handleUpdate(value){
    this.setState({
      textBox:value
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleUpdate(e.target.value)}/>
        <p>{this.state.textBox}</p>
      </div>
    );
  }
}

export default App;
