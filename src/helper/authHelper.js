import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user.getIdToken();
};

export const loginWithApple = async () => {
  const provider = new OAuthProvider("apple.com");
  const result = await signInWithPopup(auth, provider);
  return result.user.getIdToken();
};

export const loginWithEmail = async (email, password) => {
 try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.getIdToken();
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      const signupResult = await createUserWithEmailAndPassword(auth, email, password);
      return signupResult.user.getIdToken();
    } else {
      throw err;
    }
  }
};

export const loginAsGuest = async () => {
  console.log("entered")
  const result = await signInAnonymously(auth);
  console.log("Guest user logged in:", result.user);
  return result.user.getIdToken();
};

export const sendTokenToBackend = async (idToken) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${idToken}`,
    },
  });
  if (!response.ok) throw new Error("Backend login failed");
  return await response.json();
};