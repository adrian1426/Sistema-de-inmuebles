import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

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
            />

            <TextField
              variant="filled"
              label="password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Inicar
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;