import { getAuth } from 'firebase/auth';

export function createNavBar(): HTMLDivElement {
    const nav = document.createElement('nav');
    nav.classList.add('nav-wrapper', 'blue', 'navBar-custom-wrapper');

    const container = document.createElement('div');
    container.classList.add('container');

    const brandLogo = document.createElement('a');
    brandLogo.href = '#';
    brandLogo.classList.add('brand-logo', 'logo-custom');
    brandLogo.textContent = 'onUgo';

    const logoutButton = document.createElement('a');
    logoutButton.href = '#';
    logoutButton.classList.add('nav-custom-logout-btn');
    logoutButton.textContent = 'Logout';
    logoutButton.style.float = 'right'; // Align to the right

    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Log out logic here, then redirect to login
        const auth = getAuth();
        auth.signOut().then(() => {
            window.location.href = '/login';
        }).catch((error) => {
            console.error('Logout error:', error);
        });
    });

    container.appendChild(brandLogo);
    container.appendChild(logoutButton);
    nav.appendChild(container);

    const navWrapper = document.createElement('div');
    navWrapper.appendChild(nav);

    return navWrapper as HTMLDivElement;
}
