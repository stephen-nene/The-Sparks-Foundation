// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,FacebookAuthProvider, GithubAuthProvider,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD9OJdU2azOi0fSKks_kh-Mlo8tjQPhFfY",
  authDomain: "petfinder-fe85c.firebaseapp.com",
  projectId: "petfinder-fe85c",
  storageBucket: "petfinder-fe85c.appspot.com",
  messagingSenderId: "222455173605",
  appId: "1:222455173605:web:6e9eb3a377769579df1f0c",
  measurementId: "G-70DC368V2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();
const provider2 = new GoogleAuthProvider();
const provider3 = new GithubAuthProvider();
export {auth,provider, provider2,provider3};