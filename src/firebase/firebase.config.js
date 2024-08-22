// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpEcd5ssYdlYIKQ7-QWEBH56qFgpbc7MQ",
  authDomain: "simple3-firebase.firebaseapp.com",
  projectId: "simple3-firebase",
  storageBucket: "simple3-firebase.appspot.com",
  messagingSenderId: "484363027958",
  appId: "1:484363027958:web:89c8b3ddc960d7636933d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;