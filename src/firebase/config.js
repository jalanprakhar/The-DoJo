import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAol6PK8LWM8HyWzH--y6xXyR97jYbbPi0",
    authDomain: "dojo-4315d.firebaseapp.com",
    projectId: "dojo-4315d",
    storageBucket: "dojo-4315d.appspot.com",
    messagingSenderId: "166521490756",
    appId: "1:166521490756:web:85c884ab4a96a80cbedb11"
  };
  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage=firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp
export { projectFirestore, projectAuth, timestamp,projectStorage }