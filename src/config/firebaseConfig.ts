import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDPLsC1Hl6gmcRqVPH7h6MXQwz9gea2hsA',
  authDomain: 'em-react-drive-fae38.firebaseapp.com',
  projectId: 'em-react-drive-fae38',
  storageBucket: 'em-react-drive-fae38.appspot.com',
  messagingSenderId: '991336228321',
  appId: '1:991336228321:web:26064c2c9b4c5d0f89dea0',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
