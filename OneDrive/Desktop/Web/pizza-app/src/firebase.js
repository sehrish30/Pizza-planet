import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDoPXkjTmaGEvL37IWB0ahZVTwW8J21HqY",
    authDomain: "pizza-planet-86c29.firebaseapp.com",
    databaseURL: "https://pizza-planet-86c29.firebaseio.com",
    projectId: "pizza-planet-86c29",
    storageBucket: "pizza-planet-86c29.appspot.com",
    messagingSenderId: "818523384866",
    appId: "1:818523384866:web:dcfe69fc0576cdfe20ae7b"
}

firebase.initializeApp(config);
const db= firebase.firestore()

export const firebaseAuth= firebase.auth();
export const dbMenuRef = db.collection('menu');
export const dbOrdersRef = db.collection('orders');