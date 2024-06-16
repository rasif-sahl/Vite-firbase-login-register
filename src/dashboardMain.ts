import { createDashboardPage } from './pages/dashboard';

async function initApp() {
    try {
        const dashboardPage = await createDashboardPage();
        if (dashboardPage instanceof Node) {
            document.body.appendChild(dashboardPage);
        } else {
            console.error('The returned value is not a Node.');
        }
    } catch (error) {
        console.error('Error initializing the app:', error);
    }
}

document.addEventListener('DOMContentLoaded', initApp);

