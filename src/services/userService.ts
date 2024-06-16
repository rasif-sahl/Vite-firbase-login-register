import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path according to your project structure

export async function getUserData(uid: string) {
    try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

export async function setUserData(uid: string, data: any) {
    try {
        await setDoc(doc(db, 'users', uid), data);
    } catch (error) {
        console.error('Error setting user data:', error);
        throw error;
    }
}
