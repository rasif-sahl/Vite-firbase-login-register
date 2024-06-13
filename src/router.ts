import { createLoginPage } from './pages/login';
import { createRegisterPage } from './pages/register';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    if (root) {
        if (window.location.pathname === '/register') {
            root.appendChild(createRegisterPage({ title: 'onUgo Access Register', colSizes: 'col s12 m8 offset-m2 l6 offset-l3' }));
        } else {
            root.appendChild(createLoginPage({ title: 'onUgo Access Login', colSizes: 'col s12 m8 offset-m2 l6 offset-l3' }));
        }
    }
});
