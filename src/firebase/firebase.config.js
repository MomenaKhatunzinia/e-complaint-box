
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCt541q61Pvq3GuA1kUS0XaWpR2opASztk",
  authDomain: "e-complaint-box-6dd6f.firebaseapp.com",
  projectId: "e-complaint-box-6dd6f",
  storageBucket: "e-complaint-box-6dd6f.appspot.com",
  messagingSenderId: "784265724250",
  appId: "1:784265724250:web:de764ca684cccb1cdef363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;