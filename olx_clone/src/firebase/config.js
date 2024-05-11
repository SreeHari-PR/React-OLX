import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyphRPbnrapyHMu5s7RnnMD5S4byFU19I",
    authDomain: "olxclone-fc666.firebaseapp.com",
    projectId: "olxclone-fc666",
    storageBucket: "olxclone-fc666.appspot.com",
    messagingSenderId: "812792364870",
    appId: "1:812792364870:web:de26522e3d165dae79af47",
    measurementId: "G-7VL9781LCN"
  };
   export default firebase.initializeApp(firebaseConfig)