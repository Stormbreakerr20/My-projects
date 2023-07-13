// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYdvXiX8cwKg889FvGduNm5Nvp2syXThA",
  authDomain: "fir-tailwind-project.firebaseapp.com",
  projectId: "fir-tailwind-project",
  storageBucket: "fir-tailwind-project.appspot.com",
  messagingSenderId: "186313972265",
  appId: "1:186313972265:web:f848adfceb5fdf7abf5a38",
  measurementId: "G-4Y8DHPLK9F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  // add export
export const analytics = getAnalytics(app);

export const db = getFirestore(app);

