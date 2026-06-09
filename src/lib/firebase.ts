import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'studio-2251273207-7120c',
  appId: '1:801862829472:web:bdc29554d2192acec890c5',
  databaseURL: 'https://studio-2251273207-7120c-default-rtdb.firebaseio.com',
  storageBucket: 'studio-2251273207-7120c.firebasestorage.app',
  apiKey: 'AIzaSyBy1Cc8LQM3uuXq81GcBBBMjhR9DzS1c10',
  authDomain: 'studio-2251273207-7120c.firebaseapp.com',
  messagingSenderId: '801862829472',
};

// Avoid duplicate initialization in Next.js hot-reload / SSR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
