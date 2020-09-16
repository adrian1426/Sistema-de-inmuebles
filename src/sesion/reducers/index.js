import sesionReducer from './sesionReducer';
import snackBarReducer from './snackBarReducer';

export const mainReducer = ({ sesionState, snackState }, action) => {
  return {
    sesionState: sesionReducer(sesionState, action),
    snackState: snackBarReducer(snackState, action)
  }
};