import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDG3u5aDaPzABUnjLUmeeYJ9X-sHOMBT-o",
    authDomain: "realtime-chat-b5656.firebaseapp.com",
    databaseURL: "https://realtime-chat-b5656.firebaseio.com",
    projectId: "realtime-chat-b5656",
    storageBucket: "realtime-chat-b5656.appspot.com",
    messagingSenderId: "1079641384927"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()