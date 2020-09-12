const initialState = {
  open: false,
  message: ''
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export default snackBarReducer;