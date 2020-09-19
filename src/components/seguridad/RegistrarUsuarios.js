import React, { Component } from 'react';
import { Container, Avatar, Typography, Grid, TextField, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';
import { crearUsuario } from '../../sesion/actions/sesionAction';
import { StateContext } from '../../sesion/store';
import { openSnackBar } from '../../sesion/actions/snackBarAction';

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

const initialUser = {
  nombre: '',
  apellido: '',
  email: '',
  password: ''
};

class RegistrarUsuarios extends Component {

  static contextType = StateContext;

  state = {
    firebase: null,
    usuario: initialUser
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.firebase === prevState.firebase) {
      return null;
    }

    return {
      firebase: nextProps.firebase
    }
  };

  onChange = e => {
    const usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;

    this.setState({ usuario });
  };

  registrarUsuario = async e => {
    e.preventDefault();
    const { firebase, usuario } = this.state;
    const dispatch = this.context[1];

    const responseRegistrarUsuario = await crearUsuario(dispatch, firebase, usuario);

    if (responseRegistrarUsuario.status) {
      this.props.history.push('/');
    } else {
      openSnackBar(dispatch, { open: true, message: responseRegistrarUsuario.message.message });
    }
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

export default compose(consumerFirebase)(RegistrarUsuarios);