import React, { useState, useEffect, useContext } from 'react';
import AppNavBar from './components/layout/AppNavBar';
import ListaInmuebles from './components/views/ListaInmuebles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './theme/theme';
import RegistrarUsuarios from './components/seguridad/RegistrarUsuarios';
import Login from './components/seguridad/Login';
import { FirebaseContext } from './server';
import { useStateValue } from './sesion/store';
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const [authIniciado, setAuthIniciado] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [{ snackState }, dispatch] = useStateValue();

  useEffect(() => {
    firebase.iniciado()
      .then(val => {
        setAuthIniciado(val)
      })
  });


  const handleClose = () => {
    dispatch({
      type: 'OPEN_SNACKBAR',
      payload: {
        open: false,
        message: ''
      }
    });
  };

  return authIniciado !== false ? (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackState ? snackState.open : false}
        autoHideDuration={3000}
        onClose={handleClose}
        message={snackState ? snackState.message : ''}
      />

      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavBar />

          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles} />
              <Route path="/usuarios/registrar" component={RegistrarUsuarios} />
              <Route path="/usuarios/login" component={Login} />
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    </React.Fragment>

  ) : null;
}

export default App;
