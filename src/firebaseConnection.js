import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJUp2L9DayDa8LFDTUOiZ2qNTXOBAfD4U",
  authDomain: "appcreateandlogin.firebaseapp.com",
  projectId: "appcreateandlogin",
  storageBucket: "appcreateandlogin.appspot.com",
  messagingSenderId: "1094846978364",
  appId: "1:1094846978364:web:9e1de8a818083254392639",
  measurementId: "G-QRL2MWLY5T"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;