export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  };
}
export const decrement = () => {
  return {
    type: DECREMENT
  };
}
export const add = (payload) => {
  return {
    type: ADD,
    ...payload
  };
}
export const subtract = (payload) => {
  return {
    type: SUBTRACT,
    ...payload
  };
}

export const saveResult = res => {
  return {
    type: STORE_RESULT,
    ...res
  };
}

export const storeResult = (payload) => {
  return dispatch => {
    // simulate reaching out to server
    setTimeout(() => {
      dispatch(saveResult(payload));
    }, 2000)
  };
}
export const deleteResult = (payload) => {
  return {
    type: DELETE_RESULT,
    ...payload
  };
}