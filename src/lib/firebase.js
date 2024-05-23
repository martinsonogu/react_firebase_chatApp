import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-3a63a.firebaseapp.com",
  projectId: "reactchat-3a63a",
  storageBucket: "reactchat-3a63a.appspot.com",
  messagingSenderId: "216426977542",
  appId: "1:216426977542:web:cb5d7651c5309f300d6687"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()