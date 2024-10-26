// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Add Firestore
import { getStorage } from "firebase/storage"; // Add Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2jWJETZAolPYGxBRDwEqbkQjfLya-FY",
  authDomain: "deploy-your-dev-deakin-app.firebaseapp.com",
  projectId: "deploy-your-dev-deakin-app",
  storageBucket: "deploy-your-dev-deakin-app.appspot.com",
  messagingSenderId: "558166036512",
  appId: "1:558166036512:web:421159c8a1b2f609b12c45",
  measurementId: "G-TE8VN01XWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore (Database)
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export the initialized services for use in your app
export { app, analytics, auth, db, storage };
