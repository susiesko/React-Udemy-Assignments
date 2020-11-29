import React, { Component } from 'react';
import classes from './App.module.css'; // use '.module.css' extension in newer versions of react for CSS modules
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // can set this.state here instead
  }

  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'asdf2', name: 'Manu', age: 29 },
      { id: 'asdf3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

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

    // this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 });
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js], render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}/>       
      );
    }
    
    return (
      <Aux classes={classes.Cockpit}>
        <button onClick={() => {this.setState({showCockpit:!this.state.showCockpit})}}>Toggle Cockpit</button>
        {
          this.state.showCockpit
          ?
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}/>
          :
          ''
        }
        { persons }
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
