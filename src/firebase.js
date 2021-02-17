import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBeJUtV2PkOh-KBP678UOEmTaW29SOy8oQ",
    authDomain: "shop-firebase-28f1b.firebaseapp.com",
    projectId: "shop-firebase-28f1b",
    storageBucket: "shop-firebase-28f1b.appspot.com",
    messagingSenderId: "1064988442465",
    appId: "1:1064988442465:web:1fa7eb588236fff10d8f20"
  });

export const db = firebase.firestore();
