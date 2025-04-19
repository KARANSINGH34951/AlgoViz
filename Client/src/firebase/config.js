import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBMbIuicHbL6ElDDe3uNkQd1ij4_JipiPs",
  authDomain: "roadmap-84cc3.firebaseapp.com",
  databaseURL: "https://roadmap-84cc3-default-rtdb.firebaseio.com",
  projectId: "roadmap-84cc3",
  storageBucket: "roadmap-84cc3.appspot.com",
  messagingSenderId: "920943196081",
  appId: "1:920943196081:web:4c468cc7eaa0783c1cef90",
  measurementId: "G-CV5V4737G2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth,googleProvider };  // Named export instead of default export