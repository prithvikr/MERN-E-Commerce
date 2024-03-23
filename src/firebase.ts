import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuDDhwBMAlzrUuXKixRIhduzxtNF2BTTU",
  authDomain: "mern-ecommerce-333b5.firebaseapp.com",
  projectId: "mern-ecommerce-333b5",
  storageBucket: "mern-ecommerce-333b5.appspot.com",
  messagingSenderId: "670624735063",
  appId: "1:670624735063:web:4f9e274c5c5a5047862812",


  // apiKey: import.meta.env.VITE_FIREBSAE_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.ITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
