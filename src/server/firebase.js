import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDV37wg-LKXXPwQHLQYkOUA0G1laup-rds",
  authDomain: "home-5a1bd.firebaseapp.com",
  databaseURL: "https://home-5a1bd.firebaseio.com",
  projectId: "home-5a1bd",
  storageBucket: "home-5a1bd.appspot.com",
  messagingSenderId: "393268007986",
  appId: "1:393268007986:web:432910810170abd3fa982b",
  measurementId: "G-CCBJY3QJQR"
};

class Firebase {

  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

};

export default Firebase;