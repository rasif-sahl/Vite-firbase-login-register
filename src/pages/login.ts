import { createFormField } from '../components/formField';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { createSubmitButton } from '../components/buttonSubmit';
import { createCompanyName } from '../components/companyName';
import Swal from 'sweetalert2';

interface LoginPageOptions {
    title: string;
    colSizes: string;
}

export function createLoginPage({ title, colSizes }: LoginPageOptions): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'login-container';
    container.classList.add('container');

    const companyName = createCompanyName();
    container.appendChild(companyName);

    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add(...colSizes.split(' '));

    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card-title', 'center-align', 'flow-text', 'grey-text');
    cardTitle.textContent = title;
    cardContent.appendChild(cardTitle);

    const form = document.createElement('form');
    form.id = 'login-form';

    form.appendChild(createFormField('login-email', 'Email', 'email'));
    form.appendChild(createFormField('login-password', 'Password', 'password'));

    const submitButton = createSubmitButton();
    form.appendChild(submitButton);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = (form.querySelector('#login-email') as HTMLInputElement).value;
        const password = (form.querySelector('#login-password') as HTMLInputElement).value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Logged in:', userCredential);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Login error:', error);
            // Show Sweet Alert here for error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password!'
            });
        }
    });

    const loginLinkContainer = document.createElement('div');
    loginLinkContainer.classList.add('center-align', 'redirect-link');

    const loginLinkText = document.createTextNode('No Account? ');
    const loginLink = document.createElement('a');
    loginLink.href = '/register';
    loginLink.textContent = 'Create One';
    loginLink.classList.add('login-link');

    loginLinkContainer.appendChild(loginLinkText);
    loginLinkContainer.appendChild(loginLink);

    form.appendChild(loginLinkContainer);

    const forgotPasswordContainer = document.createElement('div');
    forgotPasswordContainer.classList.add('center-align', 'forgot-password');

    const forgotPasswordText = document.createTextNode('Forgot Password? ');
    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '#';
    forgotPasswordLink.textContent = 'Reset Password';
    forgotPasswordLink.classList.add('login-link');

    forgotPasswordContainer.appendChild(forgotPasswordText);
    forgotPasswordContainer.appendChild(forgotPasswordLink);

    form.appendChild(forgotPasswordContainer);

    cardContent.appendChild(form);
    card.appendChild(cardContent);
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);

    return container;
}
