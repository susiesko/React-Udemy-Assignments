import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const storeResult = (state, action) => {
  // I personally do not find 'new Date()' to be a very good identifier given the possibility of duplicate keys,
  // but I am just following along with the course. 
  // Update in lecture 264: I'm going to use Date.now() since a bit more precise
  let results = state.results.concat({ id: Date.now(), value: action.result });

  return updateObject(state, { results } );  
}

const deleteResult = (state, action) => {
  const results = state.results.filter(cur => cur.id !== action.idToDelete);

  return updateObject(state, { results });
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.STORE_RESULT: return storeResult(state, action);
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
  }
  return state;
};

export default reducer;