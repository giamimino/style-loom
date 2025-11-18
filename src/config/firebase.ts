import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9U22GKUQ82qkOGY4oCCwTMpLa9pemtZo",
  authDomain: "style-loom-6cec7.firebaseapp.com",
  projectId: "style-loom-6cec7",
  storageBucket: "style-loom-6cec7.firebasestorage.app",
  messagingSenderId: "673516113809",
  appId: "1:673516113809:web:2367e5dcef0766dcbf5430",
  measurementId: "G-L1DWW225KS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)