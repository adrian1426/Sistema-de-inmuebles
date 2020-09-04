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

  state = {
    usuario: {
      nombre: '',
      apellido: '',
      email: '',
      password: ''
    }
  };

  onChange = e => {
    const usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;

    this.setState({ usuario });
  };

  registrarUsuario = e => {
    e.preventDefault();
    console.log('state usuario: ', this.state.usuario);
  };

  render() {
    const { nombre, apellido, email, password } = this.state.usuario;

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
                  onChange={this.onChange}
                  value={nombre}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  name="apellido"
                  fullWidth
                  label="ingrese su apellido"
                  onChange={this.onChange}
                  value={apellido}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  fullWidth
                  label="ingrese su correo electrónico"
                  onChange={this.onChange}
                  value={email}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  name="password"
                  type="password"
                  fullWidth
                  label="ingrese su password"
                  onChange={this.onChange}
                  value={password}
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
                  onClick={this.registrarUsuario}
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