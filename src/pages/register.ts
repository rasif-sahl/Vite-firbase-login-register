import { createFormField } from '../components/formField';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
import { createSubmitButton } from '../components/buttonSubmit';
import { createCompanyName } from '../components/companyName';

interface RegisterPageOptions {
    title: string;
    colSizes: string;
}

export function createRegisterPage({ title, colSizes }: RegisterPageOptions): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'register-container';
    container.classList.add('container');

    //Render the company logo component 
    const companyName = createCompanyName();
    container.appendChild(companyName);

    const row = document.createElement('div');
    row.classList.add('row');

    // Add dynamic columns for the wrapper
    const col = document.createElement('div');
    col.classList.add(...colSizes.split(' '));

    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Add a dynamic title for the card
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card-title', 'center-align', 'flow-text', 'grey-text');
    cardTitle.textContent = title;
    cardContent.appendChild(cardTitle);

    const form = document.createElement('form');
    form.id = 'register-form';

    form.appendChild(createFormField('register-email', 'Email', 'email'));
    form.appendChild(createFormField('register-password', 'Password', 'password'));

    const submitButton = createSubmitButton(); // Create submit button component
    form.appendChild(submitButton);

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const email = (form.querySelector('#register-email') as HTMLInputElement).value;
    //     const password = (form.querySelector('#register-password') as HTMLInputElement).value;

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             console.log('Registered:', userCredential);
    //         })
    //         .catch((error) => {
    //             console.error('Registration error:', error);
    //         });
    // });

    const loginLinkContainer = document.createElement('div');
    loginLinkContainer.classList.add('center-align', 'redirect-link');

    const loginLinkText = document.createTextNode('Already have an account? ');
    const loginLink = document.createElement('a');
    loginLink.href = '/login';
    loginLink.textContent = 'Login here';
    loginLink.classList.add('login-link');

    // Append the text node and the link to the container
    loginLinkContainer.appendChild(loginLinkText);
    loginLinkContainer.appendChild(loginLink);

    // Append the container to the form
    form.appendChild(loginLinkContainer);




    cardContent.appendChild(form);
    card.appendChild(cardContent);
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row);

    return container;
}
