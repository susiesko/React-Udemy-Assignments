import React, { Component } from 'react';
import classes from './App.module.css'; // use '.module.css' extension in newer versions of react for CSS modules
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'asdf2', name: 'Manu', age: 29 },
      { id: 'asdf3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { id: 'asdf1', name: newName, age: 28 },
      { id: 'asdf2', name: 'Manu', age: 29 },
      { id: 'asdf3', name: 'Stephanie', age: 27 }
    ]});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // returns a new copy of the array rather than referencing the original object
    const persons = [...this.state.persons]; // use spread operator to create a new copy of the array
    persons.splice(personIndex, 1);    
    this.setState({ persons: persons });
  };

  togglePersonsHandler = (event) => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;
    let btnClassRed = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person                  
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}/>
              </ErrorBoundary>
            );
          })}
        </div>        
      );
      
      btnClassRed = classes.Red;
      // style.backgroundColor = 'darkred';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClassRed} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
