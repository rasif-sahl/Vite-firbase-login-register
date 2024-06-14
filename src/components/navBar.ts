import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Swal from 'sweetalert2';

export function createNavBar(): HTMLDivElement {
    const nav = document.createElement('nav');
    nav.classList.add('nav-wrapper', 'blue');

    const container = document.createElement('div');
    container.classList.add('container');

    const brandLogo = document.createElement('a');
    brandLogo.href = '#';
    brandLogo.classList.add('brand-logo');
    brandLogo.textContent = 'My App';

    const logoutButton = document.createElement('a');
    logoutButton.href = '#';
    logoutButton.classList.add('right');
    logoutButton.textContent = 'Logout';

    logoutButton.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout error:', error);
            // Show Sweet Alert here for error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong during logout!'
            });
        }
    });

    container.appendChild(brandLogo);
    container.appendChild(logoutButton);
    nav.appendChild(container);

    return nav;
}
