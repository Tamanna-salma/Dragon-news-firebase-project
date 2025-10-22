// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwv9dCSCY-olErfiSBnVXNFkfN5yW_Bw",
  authDomain: "dragon--news-project.firebaseapp.com",
  projectId: "dragon--news-project",
  storageBucket: "dragon--news-project.firebasestorage.app",
  messagingSenderId: "592409135899",
  appId: "1:592409135899:web:11719219cfad50faa921be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app