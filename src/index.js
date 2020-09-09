import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, { FirebaseContext } from './server';
import { initialState } from './sesion/initialState';
import { StateProvider } from './sesion/store';
import sesionReducer from './sesion/reducers/sesionReducer';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <StateProvider initialState={initialState} reducer={sesionReducer}>
        <App />
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
