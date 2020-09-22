import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useStateValue } from '../../sesion/store';

const RutaAuth = props => {
  const { component: Component, isAutenticatedFirebase, ...restProps } = props;
  const { autenticado } = useStateValue()[0];

  console.log(autenticado)

  return (
    <Route
      {...restProps}
      render={
        props => (
          (isAutenticatedFirebase !== null || autenticado) ?
            <Component {...props} /> : <Redirect to="/usuarios/login" />
        )
      }
    />
  );
};

RutaAuth.propTypes = {
  component: PropTypes.func.isRequired,
  isAutenticatedFirebase: PropTypes.any
};

export default RutaAuth;