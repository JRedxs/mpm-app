// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0GIl8ylSn-ntMfJp8c7vGyYY7tDykQjI",
  authDomain: "mpm-app-4d25f.firebaseapp.com",
  projectId: "mpm-app-4d25f",
  storageBucket: "mpm-app-4d25f.appspot.com",
  messagingSenderId: "352597090782",
  appId: "1:352597090782:web:4659860ada30b467783d4f",
  measurementId: "G-K2R00SDKPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);