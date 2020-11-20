import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

import UserInput from './Section3Assignment/UserInput/UserInput';
import UserOutput from './Section3Assignment/UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      'Susie',
      'Dana',
      'Zelda',
      'Kohana',
    ]
  };

  userInputChange = (event) => {
    console.log(event);
    this.setState(
      {
        usernames: [
          event.target.value,
          event.target.value,
          event.target.value,
          event.target.value,
        ]          
      }          
    )
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
        <UserInput inputChanged={this.userInputChange}/>
        <UserOutput 
          username={this.state.usernames[0]} 
          content="This is the first UserOutput component."
        />
        <UserOutput 
          username={this.state.usernames[1]} 
          content="This is the second UserOutput component."
        />
        <UserOutput 
          username={this.state.usernames[2]} 
          content="This is the third UserOutput component."
        />
        <UserOutput 
          username={this.state.usernames[3]} 
          content="This is the fourth UserOutput component."
        />
      </div>
    );
  }
}

/* class App extends Component {
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
} */

export default App;
