import React, { Component } from 'react';
import { Toolbar, Typography, Button, IconButton, Drawer, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { consumerFirebase } from '../../../server'
import { compose } from 'recompose';
import { StateContext } from '../../../sesion/store';
import { cerrarSesion } from '../../../sesion/actions/sesionAction';
import MenuDerecha from './MenuDerecha';
import MenuIzquierda from './MenuIzquierda';
import fotoUsuario from '../../../assets/naruto.jpg';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    openRight: false,
    openLeft: false
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

  toggleDrawerLeft = open => {
    this.setState({ openLeft: open });
  };

  render() {
    const { openRight, openLeft } = this.state;
    const { classes } = this.props;
    const [{ sesionState }] = this.context;
    const { usuario } = sesionState;
    const datoUsuario = `${usuario?.nombre} ${usuario?.apellido}`;

    return (
      <div>

        <Drawer
          open={openLeft}
          onClose={() => this.toggleDrawerLeft(false)}
          anchor='left'
        >
          <div
            role="button"
            onClick={() => this.toggleDrawerLeft(false)}
            onKeyDown={() => this.toggleDrawerLeft(false)}
          >
            <MenuIzquierda
              classes={classes}
            />
          </div>
        </Drawer>

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
          <IconButton color="inherit" onClick={() => this.toggleDrawerLeft(true)}>
            <i className="material-icons">menu</i>
          </IconButton>


          <Typography variant="h6">Adrian Homes</Typography>

          <div className={classes.grow}></div>

          <div className={classes.sectionDesktop}>

            <IconButton color="inherit" component={Link} to="">
              <i className="material-icons">mail_outline</i>
            </IconButton>

            <Button color="inherit" onClick={this.cerrarSesionApp}>Salir</Button>

            <Button color="inherit">{datoUsuario}</Button>

            <Avatar src={fotoUsuario} />
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