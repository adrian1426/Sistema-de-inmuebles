import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#10A75F'
    },
    secondary: {
      main: '#e53935'
    },
    common: {
      white: 'white'
    }
  },
  spacing: 10
});

export default theme;