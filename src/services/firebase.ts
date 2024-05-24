import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

if (!apiKey) {
  throw new Error("FIREBASE_API_KEY not define");
}

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "linh-portfolio.firebaseapp.com",
  projectId: "linh-portfolio",
  storageBucket: "linh-portfolio.appspot.com",
  messagingSenderId: "66408422117",
  appId: "1:66408422117:web:ab2c6d4d37db7c5c3d920c",
  measurementId: "G-Q34NT5YL87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
