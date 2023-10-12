import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu5IuZX9A9-L-nCWFZCVc0c49rFf-Oaqo",
  authDomain: "react-native-391f9.firebaseapp.com",
  databaseURL: "https://react-native-391f9-default-rtdb.firebaseio.com",
  projectId: "react-native-391f9",
  storageBucket: "react-native-391f9.appspot.com",
  messagingSenderId: "36394649841",
  appId: "1:36394649841:web:9a1bc01086045f8daa4150"
};

export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app);