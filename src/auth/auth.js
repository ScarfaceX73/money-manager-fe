import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth as firebaseAuth } from "./firebase";
import { app } from "./firebase";

const googleProvider = new GoogleAuthProvider();

const login = () => {
  signInWithPopup(firebaseAuth, googleProvider)
    .then(() => {
      window?.location?.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = () => {
  signOut(firebaseAuth).then(() => {
    window?.location?.reload();
  });
};

export { login, logout };
