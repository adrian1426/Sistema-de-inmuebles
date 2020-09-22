import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

const MenuIzquierda = props => {
  const { classes } = props;

  return (
    <div className={classes.list}>
      <List>
        <ListItem component={Link} button to="/usuarios/perfil">
          <i className="material-icons">account_box</i>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Perfil" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem component={Link} button to="">
          <i className="material-icons">add_box</i>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Nuevo inmueble" />
        </ListItem>

        <ListItem component={Link} button to="">
          <i className="material-icons">business</i>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Inmuebles" />
        </ListItem>

        <ListItem component={Link} button to="">
          <i className="material-icons">mail_outline</i>
          <ListItemText classes={{ primary: classes.listItemText }} primary="Mensajes" />
        </ListItem>
      </List>

    </div>
  );
};

MenuIzquierda.propTypes = {
  classes: PropTypes.any
};

export default MenuIzquierda;