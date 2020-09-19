import React from 'react';
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuDerecha = (props) => {
  const { classes, textoUsuario, fotoUsuario, cerrarSesion } = props;

  return (
    <div className={classes.list}>
      <List>

        <ListItem button component={Link} to="/usuarios/registrar">
          <Avatar
            key={'avatar'}
            src={fotoUsuario}
          />
          <ListItemText
            key='itemText'
            classes={{ primary: classes.listItemText }}
            primary={textoUsuario}
          />
        </ListItem>

        <ListItem button onClick={cerrarSesion}>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Cerrar sesión"
          />
        </ListItem>

      </List>
    </div>
  );
};

MenuDerecha.propTypes = {
  classes: PropTypes.any,
  usuario: PropTypes.object.isRequired,
  textoUsuario: PropTypes.string.isRequired,
  fotoUsuario: PropTypes.string,
  cerrarSesion: PropTypes.func
};

export default MenuDerecha;