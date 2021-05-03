import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcuCZ3XyekoaHMCz_5LEhD7d8qvYa-gvk",
  authDomain: "fir-practice-16061.firebaseapp.com",
  projectId: "fir-practice-16061",
  storageBucket: "fir-practice-16061.appspot.com",
  messagingSenderId: "1003320868552",
  appId: "1:1003320868552:web:f60f81402a585a3b7c2ffd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth, firebaseApp };
