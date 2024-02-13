// Import the functions you need from the SDKs you need
import { getApp,getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import App from "./src/App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB10nC7uW1jjqdBCxOiw4v1ARNGMMrkLiY",
  authDomain: "splash-bean-brews.firebaseapp.com",
  databaseURL: "https://splash-bean-brews-default-rtdb.firebaseio.com",
  projectId: "splash-bean-brews",
  storageBucket: "splash-bean-brews.appspot.com",
  messagingSenderId: "173591094697",
  appId: "1:173591094697:web:119e8766b3fef7433fd0b8"
};
const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)
export {app,firestore,storage};