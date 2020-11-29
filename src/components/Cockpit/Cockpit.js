import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.module.css'

const Cockpit = ( props ) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {

      console.log('[Cockpit.js] useEffect');
      // use for http request... etc
      // setTimeout(() => {
      //   alert('saved data to cloud!');
      // }, 1000);
      toggleBtnRef.current.click();

      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, 
    // this only runs when props.persons is updated.
    //[props.persons]
    // this only runs when component renders the first time
    []
  );

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  })

  const assignedClasses = [];

  let btnClasses = 'aaaaa';

  if (props.showPersons){
    btnClasses = classes.Red;
  }

  if (props.personsLength <= 2){
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1){
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
        ref={toggleBtnRef}
        className={btnClasses} 
        onClick={props.clicked}>
          Toggle Persons
      </button>         
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
