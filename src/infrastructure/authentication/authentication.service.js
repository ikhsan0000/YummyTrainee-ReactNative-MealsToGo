import React, { useState, createContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Text, View } from "react-native";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpJF4pkuZF9H-9bLyhNoZYvqFm39PcmUs",
  authDomain: "mealstogo-ea942.firebaseapp.com",
  projectId: "mealstogo-ea942",
  storageBucket: "mealstogo-ea942.appspot.com",
  messagingSenderId: "175996276668",
  appId: "1:175996276668:web:f034625378ce6494bea5b9",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
