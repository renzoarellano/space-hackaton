import firebase from "firebase";
import { firebaseConfig } from "./firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
/* /* export const ref = firebase.database().ref();  */
export const auth = firebase.auth;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
