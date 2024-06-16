import { createNavBar } from '../components/navBar';
import { protectRoute } from '../router';
import { auth } from '../firebase';
import { getUserData } from '../services/userService'; // Adjust the import path according to your project structure

export async function createDashboardPage(): Promise<HTMLDivElement> {
    const container = document.createElement('div');
    container.id = 'dashboard-container';

    await protectRoute(async () => {
        const navBar = createNavBar();
        container.appendChild(navBar);

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('container');

        const content = document.createElement('div');
        content.classList.add('content');

        const user = auth.currentUser;
        if (user) {
            try {
                const userData = await getUserData(user.uid);
                const userName = userData?.username;

                content.innerHTML = `
                    <h2>Welcome to the Dashboard, ${userName}</h2>
                    <p>This page is only accessible to authenticated users.</p>
                `;
            } catch (error) {
                content.innerHTML = `
                    <h2>Welcome to the Dashboard</h2>
                    <p>This page is only accessible to authenticated users.</p>
                    <p>Unable to fetch user information.</p>
                `;
            }
        } else {
            content.innerHTML = `
                <h2>Welcome to the Dashboard</h2>
                <p>This page is only accessible to authenticated users.</p>
                <p>No authenticated user found.</p>
            `;
        }

        contentContainer.appendChild(content);
        container.appendChild(contentContainer);
    });

    return container;
}
