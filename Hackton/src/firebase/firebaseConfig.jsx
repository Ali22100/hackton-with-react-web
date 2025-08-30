// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  setPersistence, 
  browserLocalPersistence 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0PVhC7UbThwzHxvlGMvXwmR4r3xLcgXw",
  authDomain: "hackathon-5a1f5.firebaseapp.com",
  projectId: "hackathon-5a1f5",
  storageBucket: "hackathon-5a1f5.firebasestorage.app",
  messagingSenderId: "94939266985",
  appId: "1:94939266985:web:1f12851e00ed4f2a934eb8",
  measurementId: "G-NLLQZBB7WX"
};

// ✅ Initialize Firebase
export const app = initializeApp(firebaseConfig);

// ✅ Auth export
export const auth = getAuth(app);

// ✅ Ye line add karo taake user refresh ke baad bhi login rahe
setPersistence(auth, browserLocalPersistence);

// ✅ Firestore export
export const db = getFirestore(app);
