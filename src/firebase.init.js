// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_essagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCe_hvSeJohm6oYQmoRJiBuHk3ADO-hWJw",
//   authDomain: "todo-4343a.firebaseapp.com",
//   projectId: "todo-4343a",
//   storageBucket: "todo-4343a.appspot.com",
//   messagingSenderId: "843530838359",
//   appId: "1:843530838359:web:cece7dd1928b671d439e12"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);