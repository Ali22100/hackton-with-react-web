import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIDQVBEAfcxh_MUgBcKoZJSa0HEA_N3YY",
  authDomain: "mini-hackatoon-project-2d8c0.firebaseapp.com",
  projectId: "mini-hackatoon-project-2d8c0",
  storageBucket: "mini-hackatoon-project-2d8c0.firebasestorage.app",
  messagingSenderId: "911455434871",
  appId: "1:911455434871:web:f611a102e066ed5b20ee72",
  measurementId: "G-CL9JDBQKR5"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
