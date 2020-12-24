import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCNDhNSswvuCspk2_6M3N2FCPeQQZaJ3sY",
    authDomain: "clone-7c8d8.firebaseapp.com",
    projectId: "clone-7c8d8",
    storageBucket: "clone-7c8d8.appspot.com",
    messagingSenderId: "959348573671",
    appId: "1:959348573671:web:085ad600438a40e08a2942"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }