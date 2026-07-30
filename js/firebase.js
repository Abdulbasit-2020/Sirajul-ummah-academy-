
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk15eZoNwGaX1YsXeXq33kALfm-sgBx8A",
  authDomain: "sirajul-ummah-academy.firebaseapp.com",
  projectId: "sirajul-ummah-academy",
  storageBucket: "sirajul-ummah-academy.firebasestorage.app",
  messagingSenderId: "767042103810",
  appId: "1:767042103810:web:881e896d8b7bf78a9b951b",
  measurementId: "G-6CXV9C8SWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
