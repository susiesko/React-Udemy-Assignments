const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ('INCREMENT'):
      return { ...state, counter: state.counter + 1 };      
    case ('DECREMENT'):
      return { ...state, counter: state.counter - 1 };      
    case ('ADD'):
      return { ...state, counter: state.counter + action.val };      
    case ('SUBTRACT'):
      return { ...state, counter: state.counter - action.val };
    case ('STORE_RESULT'): {
      // I personally do not find 'new Date()' to be a very good identifier given the possibility of duplicate keys,
      // but I am just following along with the course. 
      // Update in lecture 264: I'm going to use Date.now() since a bit more precise
      return { 
        ...state, 
        results: state.results.concat({ id: Date.now(), value: state.counter }) 
      };
    }
    case ('DELETE_RESULT'): {
      // let results = [...state.results];
      // results.splice(action.index, 1);

      let results = state.results.filter(cur => cur.id !== action.idToDelete);

      return { ...state, results };
    }
    default:
  }
  return state; 
};

export default reducer;