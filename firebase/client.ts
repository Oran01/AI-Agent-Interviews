import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmXCxHrAAwtMfS_hWcMdwKsMlaWdmjb-U",
  authDomain: "prepwise-96dd0.firebaseapp.com",
  projectId: "prepwise-96dd0",
  storageBucket: "prepwise-96dd0.firebasestorage.app",
  messagingSenderId: "860435316841",
  appId: "1:860435316841:web:d9d2264b1a50d9648ee2f8",
  measurementId: "G-358M763KYK",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
