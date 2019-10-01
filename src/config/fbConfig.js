import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
 

var firebaseConfig = {
    apiKey: "AIzaSyBINyrA7o6F4dRl6pzcFsn8KFW6uHUlcjQ",
    authDomain: "sawsaw-project.firebaseapp.com",
    databaseURL: "https://sawsaw-project.firebaseio.com",
    projectId: "sawsaw-project",
    storageBucket: "",
    messagingSenderId: "900113845589",
    appId: "1:900113845589:web:8a27ca35d369cdf9"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true });
  export default firebase;