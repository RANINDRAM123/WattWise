// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlPuu0ZImDkix3PzU9EO2M0hzWPymChSc",
  authDomain: "wattwise-sp.firebaseapp.com",
  projectId: "wattwise-sp",
  storageBucket: "wattwise-sp.firebasestorage.app",
  messagingSenderId: "977946680859",
  appId: "1:977946680859:web:3a4b1da36c1496c76c22be",
  measurementId: "G-PC6EM2HEKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };