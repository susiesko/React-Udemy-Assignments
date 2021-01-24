import * as actionTypes from './actionTypes';

export const saveResult = result => {  
  return {
    type: actionTypes.STORE_RESULT,
    result
  };
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
    // simulate reaching out to server
    setTimeout(() => {
      const oldCounter = getState().counter;
      dispatch(saveResult(res));
    }, 2000)
  };
}
export const deleteResult = (idToDelete) => {
  return {
    type: actionTypes.DELETE_RESULT,
    idToDelete
  };
}