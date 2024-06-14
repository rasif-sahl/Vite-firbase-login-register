import { protectRoute } from '../router';

export function createDashboardPage(): HTMLDivElement {
    const container = document.createElement('div');

    protectRoute(() => {
        container.innerHTML = `
            <h1>Welcome to the Dashboard</h1>
            <p>This page is only accessible to authenticated users.</p>
        `;
    });

    return container;
}