import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithClass from '../../../hoc/WithClass'

import classes from './Person.module.css';

class Person extends Component {
  state = {

  };

  constructor(props){
    super(props);
    console.log('[Person.js] constructor');
  }

  // componentWillReceiveProps(props){
  //   console.log('[Person.js] componentWillReceiveProps');    
  // }

  static getDerivedStateFromProps(props, state){
    console.log('[Person.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  // componentWillUpdate() {
  //   console.log('[Person.js] componentWillUpdate');    
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      <WithClass classes={classes.Person}>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3"
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {

};

export default Person;