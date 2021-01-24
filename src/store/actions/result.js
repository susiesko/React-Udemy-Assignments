import * as actionTypes from './actionTypes';

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
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
    type: actionTypes.DELETE_RESULT,
    ...payload
  };
}