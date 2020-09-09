const sesionReducer = (state, action) => {

  switch (action.type) {
    case 'INICIAR_SESION':
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado
      };
    case 'CAMBIAR_SESION':
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado
      };
    case 'CERRAR_SESION':
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado
      };
    default:
      return state;
  }

};

export default sesionReducer;