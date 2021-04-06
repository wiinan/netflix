import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyBzRjYLzKVgYFwu802bZ_Pli8ZBOo-SeD0",
    authDomain: "film-reactproject.firebaseapp.com",
    projectId: "film-reactproject",
    storageBucket: "film-reactproject.appspot.com",
    messagingSenderId: "621498328497",
    appId: "1:621498328497:web:bb62293f6a08c565230990"
};
const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export{firebase};