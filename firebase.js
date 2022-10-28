import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJABOQFSITjTf_DjRrs6SSvgOMXgNBIBE",
  authDomain: "cone-2b34a.firebaseapp.com",
  projectId: "cone-2b34a",
  storageBucket: "cone-2b34a.appspot.com",
  messagingSenderId: "1078054803820",
  appId: "1:1078054803820:web:bd3596da3b21dd4545bb49"
};

const app = !firebaseConfig.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();

export default db;