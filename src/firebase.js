import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: 'AIzaSyB9ZlrGPX-womAnLu4DKF48h5dwiURPq5k',
  authDomain: 'taqwa-diagnostic-center.firebaseapp.com',
  projectId: 'taqwa-diagnostic-center',
  storageBucket: 'taqwa-diagnostic-center.firebasestorage.app',
  messagingSenderId: '1035611078238',
  appId: '1:1035611078238:web:0dd9a92a4fd5d868937ecf',
  measurementId: 'G-L5XSL6HMV4'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

isSupported().then((ok) => {
  if (ok) getAnalytics(app);
}).catch(() => {});
