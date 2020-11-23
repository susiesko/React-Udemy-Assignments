import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]});
  };

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 27 }
    ]});
  };

  render() {
    const style = {
      backgroundColor: '#CCC',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={ () => this.switchNameHandler('Maximilian!!') }>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}
          >
          My Hobbies: Racing<br/>
          I am cool        
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />        
      </div>
    );
  }
}

export default App;
