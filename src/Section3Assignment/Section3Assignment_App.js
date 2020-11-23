import React, { Component } from 'react';
import './App.css';

import UserInput from './Section3Assignment/UserInput/UserInput';
import UserOutput from './Section3Assignment/UserOutput/UserOutput';

class Section3Assignment_App extends Component {
  state = {
      username: 'Susie'
  }

  userInputChange = (event) => {
    this.setState({ username: event.target.value });
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
        <UserInput 
          inputChanged={this.userInputChange}
          currentName={this.state.username}
        />
        <UserOutput 
          username={this.state.username} 
          content="This is the first UserOutput component."
        />
        <UserOutput 
          username={this.state.username} 
          content="This is the second UserOutput component."
        />
        <UserOutput 
          username={this.state.username} 
          content="This is the third UserOutput component."
        />
        <UserOutput 
          username="Dana" 
          content="This is the fourth UserOutput component."
        />
      </div>
    );
  }
}

export default Section3Assignment_App;