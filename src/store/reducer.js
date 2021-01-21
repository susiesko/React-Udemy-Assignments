import * as actionTypes from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_PERSON: {      
      const newPerson = {
        id: Date.now(), // not really unique but good enough here!
        name: action.name,
        age: action.age 
      }

      return { 
        ...state, 
        persons: state.persons.concat(newPerson) 
      };
    }
    case actionTypes.DELETE_PERSON: {
      return { ...state, persons:  state.persons.filter(cur => cur.id !== action.idToDelete) };
    }
    default:
  }
  return state;
};

export default reducer;