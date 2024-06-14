import { createNavBar } from '../components/navBar';
import { protectRoute } from '../router';

export function createDashboardPage(): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'dashboard-container';

    protectRoute(() => {
        const navBar = createNavBar();
        container.appendChild(navBar);

        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = `
            <h1>Welcome to the Dashboard</h1>
            <p>This page is only accessible to authenticated users.</p>
        `;
        container.appendChild(content);
    });

    return container;
}
