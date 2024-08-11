// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCShFBmUkZ_YaVflDDUst3-7HoVGKliqSk",
  authDomain: "inventory-15e91.firebaseapp.com",
  projectId: "inventory-15e91",
  storageBucket: "inventory-15e91.appspot.com",
  messagingSenderId: "696893778344",
  appId: "1:696893778344:web:e20a8b5ff46a1f430d559d",
  measurementId: "G-W2RY457V3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
