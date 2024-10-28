// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0M91gKtpbNjpjWwR5cVZLWWu882-eF-A",
  authDomain: "firstproject-b66a2.firebaseapp.com",
  projectId: "firstproject-b66a2",
  storageBucket: "firstproject-b66a2.appspot.com",
  messagingSenderId: "565590641093",
  appId: "1:565590641093:web:d1c7c22f5d85fddc72a3ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
const auth = getAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
export default auth;
