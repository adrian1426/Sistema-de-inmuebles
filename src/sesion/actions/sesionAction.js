export const iniciarSesion = (dispatch, firebase, email, password) => {

  return new Promise((resolve, reject) => {
    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.db.collection('Users').doc(response.user.id).get()
          .then(response => {
            const usuarioDB = response.data();
            dispatch({
              type: 'INICIAR_SESION',
              sesion: usuarioDB,
              autenticado: true
            });

            resolve();
          })
          .catch(error => console.log('error db: ', error));
      })
      .catch(error => console.log('error auth: ', error));
  });

};

export const crearUsuario = (dispatch, firebase, usuario) => {

  return new Promise((resolve, reject) => {
    firebase.auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then(response => {
        firebase.db.collection('Users').doc(response.user.uid)
          .set({
            id: response.user.uid,
            email: usuario.email,
            nombre: usuario.nombre,
            apellido: usuario.apellido
          }, { merge: true })
          .then(doc => {
            usuario.id = response.user.uid;
            dispatch({
              type: 'INICIAR_SESION',
              sesion: usuario,
              autenticado: true
            });

            resolve();
          })
          .catch(error => console.log('error db creación usuario: ', error));
      })
      .catch(error => console.log('error crear usuario auth: ', error));
  });

};

export const cerrarSesion = (dispatch, firebase) => {
  return new Promise((resolve, reject) => {
    firebase.auth.signOut()
      .then(response => {
        dispatch({
          type: 'CERRAR_SESION',
          sesion: {
            nombre: '',
            apellido: '',
            email: '',
            foto: '',
            id: '',
            telefono: ''
          },
          autenticado: false
        });

        resolve();
      })
      .catch(error => console.log('error signOut firebase: ', error));
  });
};