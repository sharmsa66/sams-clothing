import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBD10RNZRW4MWxYCyxmwITpd0kNBf8wO2k",
    authDomain: "crownpeak-db.firebaseapp.com",
    databaseURL: "https://crownpeak-db.firebaseio.com",
    projectId: "crownpeak-db",
    storageBucket: "crownpeak-db.appspot.com",
    messagingSenderId: "126635469819",
    appId: "1:126635469819:web:3c1983745bbee43a75f95e"
};


firebase.initializeApp(config);


export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle =  () => auth.signInWithPopup(provider);


export default  firebase;




