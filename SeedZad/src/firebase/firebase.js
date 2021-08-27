import firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const config = {
    apiKey: "AIzaSyBifxh25kS9Dk0URgQf4u5bvMPRCgE8CvQ",
    authDomain: "seedzad-e1805.firebaseapp.com",
    databaseURL: "https://seedzad-e1805.firebaseio.com",
    projectId: "seedzad-e1805",
    storageBucket: "seedzad-e1805.appspot.com",
    messagingSenderId: "1021547031649",
    appId: "1:1021547031649:web:96bd675d9a5a43e10ace20",
    measurementId: "G-MNZT0M5LSW"
};
firebase.initializeApp(config);
export default firebase;