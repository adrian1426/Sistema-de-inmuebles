import React, { Component } from 'react';
import { Container, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'

const style = {
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: 8,
    background: '#e53935'
  },
  form: {
    width: '100%',
    marginTop: 10
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }
};

class RegistrarUsuarios extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">Registre su cuenta</Typography>

          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="nombre"
                  fullWidth
                  label="ingrese su nombre"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  name="apellido"
                  fullWidth
                  label="ingrese su apellido"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  fullWidth
                  label="ingrese su correo electrónico"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  name="password"
                  type="password"
                  fullWidth
                  label="ingrese su password"
                />
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Grid item md={6} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  color="primary"
                  style={style.submit}
                >
                  registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default RegistrarUsuarios;