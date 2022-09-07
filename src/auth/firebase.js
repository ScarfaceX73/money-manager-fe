// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { GoogleAuthProvider, getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7oJwu5YkUSD18TQu5oGDlt0Cy9lP3epo",
  authDomain: "money-manager-project-fab21.firebaseapp.com",
  projectId: "money-manager-project-fab21",
  storageBucket: "money-manager-project-fab21.appspot.com",
  messagingSenderId: "249210389115",
  appId: "1:249210389115:web:58059f307a3d6cde5218de",
  measurementId: "G-9EKXZDYS59",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}
const app = getApp();
const auth = getAuth(app);
export { app, auth };
