import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      emptyArr : ["spaghetti ","ice cream ",'sushi ','bologna ','cheese ']
    }
  }
  render() {
    let displayedFood = this.state.emptyArr.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
        {displayedFood}
      </div>
    );
  }
}

export default App;
