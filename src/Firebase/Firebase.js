import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvjM5wiyo44-8LixN7AkfHHrxXEBTyGxM",
  authDomain: "pointofsale-dfff8.firebaseapp.com",
  projectId: "pointofsale-dfff8",
  storageBucket: "pointofsale-dfff8.appspot.com",
  messagingSenderId: "755299976353",
  appId: "1:755299976353:web:8189faf77bbb249bf5dce0",
  measurementId: "G-MGXLD3QSKK",
};
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();

export var firestore = firebase.firestore();
export var serverTimeStamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref();
export default firebase;
export var GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
