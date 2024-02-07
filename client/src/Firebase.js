import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDsFMWOmkBABMXB83fRXC_uUTnHUdfkjB4",
  authDomain: "negotiator-6121f.firebaseapp.com",
  projectId: "negotiator-6121f",
  storageBucket: "negotiator-6121f.appspot.com",
  messagingSenderId: "232370722791",
  appId: "1:232370722791:web:e3d0623139bcb3bb9acf42",
  measurementId: "G-GTMN31X8N2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };