import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var config = {
    apiKey: "AIzaSyAEah1857doXBeyp3YXEUme985i-fGCrQ0",
    authDomain: "react-slack-a6432.firebaseapp.com",
    databaseURL: "https://react-slack-a6432.firebaseio.com",
    projectId: "react-slack-a6432",
    storageBucket: "react-slack-a6432.appspot.com",
    messagingSenderId: "189010499700"
  };
firebase.initializeApp(config);

export default firebase;