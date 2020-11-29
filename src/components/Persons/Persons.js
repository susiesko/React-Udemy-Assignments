import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person'

class Persons extends PureComponent {
  state = {

  };

  constructor(props){
    super(props);
    console.log('[Persons.js] constructor');
  }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps');    
  // }

  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  // componentWillUpdate() {
  //   console.log('[Persons.js] componentWillUpdate');    
  // }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');    
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');        
  }

  render() {
    console.log('[Persons.js] rendering...');

    return (
      <div>
        {
          this.props.persons.map((person, index) => {
            return (
              <Person 
                key={person.id}                 
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}/>
            );
          })
        }     
      </div>
    );
  }
}

Persons.propTypes = {

};

export default Persons;