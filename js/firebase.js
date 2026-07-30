
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAK15eZoNWGaX1YsXeXq33kALfm-sgBX8A",
  authDomain: "sirajul-ummah-academy.firebaseapp.com",
  projectId: "sirajul-ummah-academy",
  storageBucket: "sirajul-ummah-academy.firebasestorage.app",
  messagingSenderId: "767042103810",
  appId: "1:767042103810:web:881e896d8b7bf78a9b951b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
