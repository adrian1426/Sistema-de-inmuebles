import React, { Component } from 'react';
import { Toolbar, Typography, Button, IconButton, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { consumerFirebase } from '../../../server'
import { compose } from 'recompose';
import { StateContext } from '../../../sesion/store';
import { cerrarSesion } from '../../../sesion/actions/sesionAction';
import MenuDerecha from './MenuDerecha';
import fotoUsuario from '../../../assets/naruto.jpg';
import { withRouter } from 'react-router-dom';

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
  },
  grow: {
    flexGrow: 1
  },
  avatarSize: {
    width: 40,
    height: 40
  },
  listItemText: {
    fontSize: '14px',
    fontWeight: 600,
    paddingLeft: '15px',
    color: '#212121'
  },
  list: {
    width: 250
  }
});

class BarSession extends Component {
  static contextType = StateContext;

  state = {
    openRight: false
  };


  cerrarSesionApp = () => {
    const dispatch = this.context[1];
    cerrarSesion(dispatch, this.props.firebase)
      .then(success => {
        this.props.history.push('/usuarios/login');
      })
      .catch(err => console.log('error de cerrar sesión: ', err));
  };

  toggleDrawer = open => {
    this.setState({ openRight: open });
  };

  render() {
    const { openRight } = this.state;
    const { classes } = this.props;
    const [{ sesionState }] = this.context;
    const { usuario } = sesionState;
    const datoUsuario = `${usuario?.nombre} ${usuario?.apellido}`;

    return (
      <div>

        <Drawer
          open={openRight}
          onClose={() => this.toggleDrawer(false)}
          anchor='right'
        >
          <div
            role="button"
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}
          >
            <MenuDerecha
              classes={classes}
              usuario={usuario}
              textoUsuario={datoUsuario}
              fotoUsuario={fotoUsuario}
              cerrarSesion={this.cerrarSesionApp}
            />
          </div>
        </Drawer>

        <Toolbar>
          <IconButton color="inherit">
            <i className="material-icons">menu</i>
          </IconButton>


          <Typography variant="h6">Adrian Homes</Typography>

          <div className={classes.grow}></div>

          <div className={classes.sectionDesktop}>
            <Button color="inherit">Login</Button>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton color="inherit" onClick={() => this.toggleDrawer(true)}>
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default compose(withRouter, consumerFirebase, withStyles(styles))(BarSession);