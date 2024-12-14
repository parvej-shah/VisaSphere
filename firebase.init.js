// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq8NmXFaJYevVsgAOEWUUGAaDkmy_96LI",
  authDomain: "visasphere-72d2e.firebaseapp.com",
  projectId: "visasphere-72d2e",
  storageBucket: "visasphere-72d2e.firebasestorage.app",
  messagingSenderId: "94285646568",
  appId: "1:94285646568:web:bc807db0775ad4372a175d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);