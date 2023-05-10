// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0mQdwL6f4tA1uoEb86uP4EztMcJ8_dIk",
  authDomain: "cac-e8661.firebaseapp.com",
  projectId: "cac-e8661",
  storageBucket: "cac-e8661.appspot.com",
  messagingSenderId: "136698652350",
  appId: "1:136698652350:web:8ee2df0054160dae8ea0ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)