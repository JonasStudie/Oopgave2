import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Forbindelsesoplysningerne bruges til at oprette Firebase-forbindelsen.
const firebaseConfig = {
  apiKey: "AIzaSyCYLvVSrdOxOD2HmZOGmh1s89Wy8Wo8F28",
  authDomain: "studiejob-d72df.firebaseapp.com",
  projectId: "studiejob-d72df",
  storageBucket: "studiejob-d72df.firebasestorage.app",
  messagingSenderId: "523422000884",
  appId: "1:523422000884:web:b6930869a156160a4fe0a1",
  measurementId: "G-5SY191S1M3"
};

// Initialiserer Firebase-app
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const rtdb = getDatabase(
  app,
  'https://studiejob-d72df-default-rtdb.europe-west1.firebasedatabase.app'
);

export { auth, rtdb };