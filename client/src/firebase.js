// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-4671b.firebaseapp.com",
    projectId: "mern-blog-4671b",
    storageBucket: "mern-blog-4671b.appspot.com",
    messagingSenderId: "659075286275",
    appId: "1:659075286275:web:43a46cd56eee1700571536"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);