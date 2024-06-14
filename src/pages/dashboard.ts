import { createNavBar } from '../components/navBar';
import { protectRoute } from '../router';

export function createDashboardPage(): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'dashboard-container';

    protectRoute(() => {
        const navBar = createNavBar();
        container.appendChild(navBar);

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('container');

        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = `
            <h2>Welcome to the Dashboard</h2>
            <p>This page is only accessible to authenticated users.</p>
        `;

        contentContainer.appendChild(content);
        container.appendChild(contentContainer);
    });

    return container;
}
