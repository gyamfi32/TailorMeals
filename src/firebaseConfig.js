import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDMwtp_oLTzwPjS_R-91rwoWMgbW8n2a0",
  authDomain: "tailor-meals.firebaseapp.com",
  projectId: "tailor-meals",
  storageBucket: "tailor-meals.appspot.com",
  messagingSenderId: "667925488799",
  appId: "1:667925488799:web:233a6acdb3e1dc8420eeaa",
  measurementId: "G-R2B8GJHJPF",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);

export { app, auth };
