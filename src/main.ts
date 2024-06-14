import './router';
import { createLoginPage } from './pages/login';
import { createRegisterPage } from './pages/register';

// Initialize the app and set up routes for public pages
function initApp() {
    const root = document.getElementById('app');
    // root.innerHTML = ''; // Clear existing content

    if (window.location.pathname === '/login') {
        root?.appendChild(createLoginPage({ title: 'Login', colSizes: 'col s12 m6 offset-m3' }));
    } else if (window.location.pathname === '/register') {
        root?.appendChild(createRegisterPage({ title: 'Register', colSizes: 'col s12 m6 offset-m3' }));
    } else {
        window.location.href = '/login'; // Default to login if route not found
    }
}

// Initialize the app on page load
document.addEventListener('DOMContentLoaded', initApp);

// Show preloader
document.getElementById('preloader')?.classList.add('active');

// Hide preloader
document.getElementById('preloader')?.classList.remove('active');
document.getElementById('preloaderContainer')?.classList.remove('preloader-container');
document.getElementById('preloaderContainer')?.classList.add('hide-preloader');