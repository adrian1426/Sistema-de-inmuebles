import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, { FirebaseContext } from './server';
import { initialState } from './sesion/initialState';
import { StateProvider } from './sesion/store';
import { mainReducer } from './sesion/reducers';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <StateProvider initialState={initialState} reducer={mainReducer}>
        <App />
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
