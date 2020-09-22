import React, { useState, useEffect, useContext } from 'react';
import { useStateValue } from '../../sesion/store';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import foto from '../../assets/naruto.jpg';
import { FirebaseContext } from '../../server';

const styles = {
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {},
  form: {
    width: '100%',
    marginTop: 20
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }
};

const PerfilUsuario = () => {
  const [{ sesionState }, dispatch] = useStateValue();
  const firebase = useContext(FirebaseContext);
  const [estado, setEstado] = useState({
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    foto: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setEstado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const guardarCambios = e => {
    e.preventDefault();

    firebase.db.collection('Users').doc(firebase.auth.currentUser.uid).set(estado, { merge: true })
      .then(success => {
        dispatch({
          type: 'INICIAR_SESION',
          sesion: estado,
          autenticado: true
        });

        dispatch({
          type: 'OPEN_SNACKBAR',
          payload: {
            open: true,
            message: 'Cambios guardados correctamente'
          }
        });
      })
      .catch(err => {
        dispatch({
          type: 'OPEN_SNACKBAR',
          payload: {
            open: true,
            message: 'Error al guardar cambios'
          }
        });
      });
  };

  useEffect(() => {
    if (estado.id === "") {
      if (sesionState) {
        setEstado(sesionState.usuario)
      }
    }
  }, [estado.id, sesionState]);

  return sesionState ?
    <Container component="main" maxWidth="md" justify="center">
      <div style={styles.paper}>
        <Avatar
          style={styles.avatar}
          src={estado.foto || foto}
        />

        <Typography component="h1" variant="h5">
          Perfil de usuario
        </Typography>

        <form style={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="nombre"
                variant="outlined"
                fullWidth
                label="Nombre"
                onChange={handleChange}
                value={estado.nombre}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="apellido"
                variant="outlined"
                fullWidth
                label="Apellidos"
                onChange={handleChange}
                value={estado.apellido}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email"
                onChange={handleChange}
                value={estado.email}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="telefono"
                variant="outlined"
                fullWidth
                label="Telefono"
                onChange={handleChange}
                value={estado.telefono}
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                style={styles.submit}
                onClick={guardarCambios}
              >
                Guardar cambios
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    : null;
};

export default PerfilUsuario;