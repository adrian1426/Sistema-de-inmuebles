import React from 'react';
import ListaInmuebles from './components/views/ListaInmuebles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ListaInmuebles />
    </MuiThemeProvider>
  );
}

export default App;
