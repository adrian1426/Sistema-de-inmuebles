export const openSnackBar = (dispatch, payload) => {
  dispatch({
    type: 'OPEN_SNACKBAR',
    payload
  });
};