import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export function navigateToProtectedPage(page: string) {
    window.location.href = page;
}

export function protectRoute(callback: () => void) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            callback();
        } else {
            window.location.href = '/login';
        }
    });
}