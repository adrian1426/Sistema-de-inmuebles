import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';
import { withStyles } from '@material-ui/styles';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';
import { StateContext } from '../../sesion/store';

const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class AppNavBar extends Component {

  static contextType = StateContext;

  componentDidMount() {
    const { firebase } = this.props;
    const [{ sesionState }, dispatch] = this.context;

    if (firebase.auth.currentUser !== null && !sesionState) {
      firebase.db.collection('Users').doc(firebase.auth.currentUser.uid).get()
        .then(doc => {
          const usuarioDB = doc.data();
          dispatch({
            type: 'INICIAR_SESION',
            sesion: usuarioDB,
            autenticado: true
          });
        });
    }
  }

  render() {
    const { sesionState } = this.context[0];

    return sesionState?.autenticado ? (
      <div>
        <AppBar position="static">
          <BarSession />
        </AppBar>
      </div>
    ) : null;
  }
}

export default compose(withStyles(styles), consumerFirebase)(AppNavBar);