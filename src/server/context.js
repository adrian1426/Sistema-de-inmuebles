import React from 'react';

const FirebaseContext = React.createContext();

export const consumerFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {value => <Component {...props} firebase={value} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;