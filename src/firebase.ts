// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBlx0CmaHllp2srDX3zKTRbD_bKqfOxBgw",
    authDomain: "vite-authentication.firebaseapp.com",
    projectId: "vite-authentication",
    storageBucket: "vite-authentication.appspot.com",
    messagingSenderId: "430914164858",
    appId: "1:430914164858:web:49e70e3480eb63a65043c3",
    measurementId: "G-B7VXW2JCXN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
