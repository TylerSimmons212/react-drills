import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      newList: '',
      food: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }
handleChange(value){
this.setState({newList:value})
}

  render() {
    let displayedFood = this.state.food.map( (value, index) => {
      if (value.includes(this.state.newList)){
        return (
          <h4 key={index}>{value}</h4>
        )
      }
    })
    return (
        <div className="App">
        <input onChange={(e)=>this.handleChange(e.target.value)}/>
        {displayedFood}
      </div>
    );
  }
}

export default App;
