import React, { Component } from 'react';
import '../App.css';

import Validation from './Validation/Validation'
import Char from './Char/Char'

//import UserInput from './Section3Assignment/UserInput/UserInput';
// import UserOutput from './Section3Assignment/UserOutput/UserOutput';

class App extends Component {
  state = {
      inputValue: ''
  }

  inputChanged = (event) => {
    this.setState({ inputValue: event.target.value })
  };

  characterClicked = (charIndex) => {
    let inputValue = this.state.inputValue;
    inputValue = inputValue.slice(0, charIndex) + inputValue.slice(charIndex + 1);
    this.setState( {inputValue: inputValue} );
  }

  render() {
    let charComponents = (
      <p>No input entered</p>
    );

    charComponents = this.state.inputValue.split('').map((c, index) => {
      return (
        <Char 
          key={index}
          character={c}
          charClicked={() => this.characterClicked(index)}
        />
      );
    });

    return (
      <div className="App">
        <input type="text" value={this.state.inputValue} onChange={this.inputChanged}/>
        <p>{this.state.inputValue.length}</p>
        <Validation textInputLength={this.state.inputValue.length}/>
        {charComponents}
      </div>
    );
  }
}

export default App;