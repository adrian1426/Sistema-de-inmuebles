import sesionReducer from './sesionReducer';
import snackBarReducer from './snackBarReducer';

export const mainReducer = ({ sesionState, snackState }, action) => {
  return {
    sesionReducer: sesionReducer(sesionState, action),
    snackBarReducer: snackBarReducer(snackState, action)
  }
};