import React from 'react';
import AppNavBar from './components/layout/AppNavBar';
import ListaInmuebles from './components/views/ListaInmuebles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './theme/theme';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavBar />

        <Grid container>
          <Switch>
            <Route path="/" exact component={ListaInmuebles} />
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>

  );
}

export default App;
