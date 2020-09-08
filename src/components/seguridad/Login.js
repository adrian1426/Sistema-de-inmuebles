import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server'

const style = {
  paper: {
    marginTop: 9,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: 5,
    background: 'red'
  },
  form: {
    width: '100%',
    marginTop: 8
  }
};

class Login extends Component {

  state = {
    usuario: {
      email: '',
      password: ''
    }
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      usuario: {
        ...this.state.usuario,
        [name]: value
      }
    });
  };

  login = e => {
    e.preventDefault();
    const { usuario } = this.state;

    this.props.firebase.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('error login: ', error);
      });
  };

  render() {
    return (
      <Container maxWidth="xs">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlined />
          </Avatar>

          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>

          <form style={style.form}>
            <TextField
              variant="filled"
              label="email"
              name="email"
              fullWidth
              margin="normal"
              onChange={this.onChange}
            />

            <TextField
              variant="filled"
              label="password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              onChange={this.onChange}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.login}
            >
              Inicar
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default compose(consumerFirebase)(Login);