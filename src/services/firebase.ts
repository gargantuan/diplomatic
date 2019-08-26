import firebase from "firebase";
import "firebase/firestore";

const config = {
  authDomain: "statecraft-dev.firebaseapp.com",
  databaseURL: "https://statecraft-dev.firebaseio.com",
  apiKey: "AIzaSyBWVUy0uEnNK8iwvtGPhpISFX6KLWUPc-o",
  projectId: "statecraft-dev",
  storageBucket: "statecraft-dev.appspot.com",
  messagingSenderId: "270165271792",
  appId: "1:270165271792:web:16566e26dad77c8b"
};

const instance = firebase.initializeApp(config);

export const db = firebase.firestore();
