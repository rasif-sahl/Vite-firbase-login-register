// // src/pages/protected.ts
// export function dashboardPage(): HTMLDivElement {
//     const container = document.createElement('div');
//     container.id = 'protected-container';
//     container.classList.add('container');
  
//     const message = document.createElement('h1');
//     message.textContent = 'Welcome to the Protected Page!';
//     container.appendChild(message);
  
//     return container;
// }
  

// protectedPage.ts
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createCompanyName } from '../components/companyName';

export function createProtectedPage(): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'protected-container';
    container.classList.add('container');

    const companyName = createCompanyName();
    container.appendChild(companyName);

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `Welcome, ${user.email}`;
            container.appendChild(content);
        } else {
            alert('You need to log in to access this page.');
            window.location.href = '/login';
        }
    });

    return container;
}
