import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgJoGQJqa3wCbrYKP4cRaX0k6MgusZDeM",
  authDomain: "marioland-88d76.firebaseapp.com",
  projectId: "marioland-88d76",
  storageBucket: "marioland-88d76.appspot.com",
  messagingSenderId: "39547461484",
  appId: "1:39547461484:web:59ca1be2a208813b6edd49",
  measurementId: "G-10RX9GZX3H",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;