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

  deleteChar = (charIndex) => {
    // let inputValue = this.state.inputValue;
    // inputValue = inputValue.slice(0, charIndex) + inputValue.slice(charIndex + 1);    
    let inputValueArry = this.state.inputValue.split('');
    inputValueArry.splice(charIndex, 1);
    let updatedText = inputValueArry.join('');
    this.setState( {inputValue: updatedText} );
  }

  render() {
    let charList = this.state.inputValue.split('').map((c, index) => {
      return (
        <Char 
          key={index}
          character={c}
          charClicked={() => this.deleteChar(index)}
        />
      );
    });

    return (
      <div className="App">
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.inputChanged}/>
        <p>{this.state.inputValue}</p>
        <Validation textInputLength={this.state.inputValue.length}/>
        {charList}
      </div>
    );
  }
}

export default App;