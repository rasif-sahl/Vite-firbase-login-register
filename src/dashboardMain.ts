import { createDashboardPage } from './pages/dashboard';

function initApp() {
    const root = document.getElementById('app');
    // root.innerHTML = ''; // Clear existing content

    if (window.location.pathname === '/dashboard') {
        root?.appendChild(createDashboardPage());
    } else {
        window.location.href = '/dashboard'; // Default to dashboard if route not found
    }
}

// Initialize the app on page load
document.addEventListener('DOMContentLoaded', initApp);
