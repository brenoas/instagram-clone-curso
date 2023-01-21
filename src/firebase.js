import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsRV1wUDtwiBFrtSns7gW5HVu1RUuckAg",
    authDomain: "instagram-clone-curso-25761.firebaseapp.com",
    projectId: "instagram-clone-curso-25761",
    storageBucket: "instagram-clone-curso-25761.appspot.com",
    messagingSenderId: "508358896413",
    appId: "1:508358896413:web:d1a34ab11214ee5d92cff4",
    measurementId: "G-9X1CQC1GKX"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();
  
  export {db, auth, storage, functions};
  