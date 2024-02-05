import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRAxVAnzoZaYkGP3K12ZtLU5Hw7CpTwaI",
  authDomain: "trip1-16684.firebaseapp.com",
  databaseURL: "https://trip1-16684-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trip1-16684",
  storageBucket: "trip1-16684.appspot.com",
  messagingSenderId: "824426729244",
  appId: "1:824426729244:web:f7273b8e06fe558f70b4d9",
  measurementId: "G-WQRFS8T378"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const firestore = getFirestore(app); 
const auth = getAuth(app);

export { firestore }; 