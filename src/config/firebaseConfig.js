// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {useAuthState} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7P_-_7eLnLFq0q3YTt9c9g8N3dbpoXIc",
  authDomain: "nameless-whispers.firebaseapp.com",
  projectId: "nameless-whispers",
  storageBucket: "nameless-whispers.appspot.com",
  messagingSenderId: "500436809223",
  appId: "1:500436809223:web:d5cf95e8ffc35e72921ca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = useAuthState()

// setup database and export it so we can fetch articles from it
export const db = getFirestore(app);
