import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBhErb5sqN5AbPw1DNozwSGyaqaUb5lkOM",
    authDomain: "barter-system-app-bc1d3.firebaseapp.com",
    databaseURL: "https://barter-system-app-bc1d3.firebaseio.com",
    projectId: "barter-system-app-bc1d3",
    storageBucket: "barter-system-app-bc1d3.appspot.com",
    messagingSenderId: "497931980909",
    appId: "1:497931980909:web:a95c32a069d71f4e1d2f64"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();