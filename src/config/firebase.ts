// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCE9m4lp0skwgtoauWMw_7ZGUydlfjl1Y",
  authDomain: "linkedin-d618e.firebaseapp.com",
  projectId: "linkedin-d618e",
  storageBucket: "linkedin-d618e.firebasestorage.app",
  messagingSenderId: "174298666170",
  appId: "1:174298666170:web:fa606d702b545646c65e83",
  measurementId: "G-1S89LM44F6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
