import React, { useState } from 'react';
import { useStateValue } from '../../sesion/store';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import foto from '../../assets/naruto.jpg';

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
  const [estado, setEstado] = useState({
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    foto: ''
  });

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
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="apellidos"
                variant="outlined"
                fullWidth
                label="Apellidos"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name="telefono"
                variant="outlined"
                fullWidth
                label="Telefono"
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