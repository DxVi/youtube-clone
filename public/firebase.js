import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA55MUzgYyc4DT9d3gECjWkSDzjpvmF0ps",
  authDomain: "clone-24ce3.firebaseapp.com",
  databaseURL: "https://clone-24ce3.firebaseio.com",
  projectId: "clone-24ce3",
  storageBucket: "clone-24ce3.appspot.com",
  messagingSenderId: "820404022214",
  appId: "1:820404022214:web:61ae99243040cb942360c7",
  measurementId: "G-ZNPX31M7JG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
