// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD40dz-P-6ql9abn1XZfnBRkaoKKxIMMa0",
  authDomain: "social-media-app-8d2aa.firebaseapp.com",
  projectId: "social-media-app-8d2aa",
  storageBucket: "social-media-app-8d2aa.appspot.com",
  messagingSenderId: "1025986488389",
  appId: "1:1025986488389:web:a1a48f095e79b336145b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);