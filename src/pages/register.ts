import { createFormField } from '../components/formField';
import { createSubmitButton } from '../components/buttonSubmit';
import { createCompanyName } from '../components/companyName';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

interface RegisterPageOptions {
    title: string;
    colSizes: string;
}

export function createRegisterPage({ title, colSizes }: RegisterPageOptions): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'register-container';
    container.classList.add('container');

    // Render the company logo component 
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

    // Create a row for username and mobile number
    const userMobileRow = document.createElement('div');
    userMobileRow.classList.add('row');

    const usernameCol = document.createElement('div');
    usernameCol.classList.add('col', 's6');
    usernameCol.appendChild(createFormField('register-username', 'Username', 'text'));

    const mobileCol = document.createElement('div');
    mobileCol.classList.add('col', 's6');
    mobileCol.appendChild(createFormField('register-mobile', 'Mobile Number', 'tel'));

    userMobileRow.appendChild(usernameCol);
    userMobileRow.appendChild(mobileCol);

    form.appendChild(userMobileRow);
    form.appendChild(createFormField('register-email', 'Email', 'email'));
    form.appendChild(createFormField('register-password', 'Password', 'password'));

    const submitButton = createSubmitButton(); // Create submit button component
    form.appendChild(submitButton);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usernameInput = form.querySelector('#register-username') as HTMLInputElement;
        const mobileInput = form.querySelector('#register-mobile') as HTMLInputElement;
        const emailInput = form.querySelector('#register-email') as HTMLInputElement;
        const passwordInput = form.querySelector('#register-password') as HTMLInputElement;

        const username = usernameInput.value;
        const mobile = mobileInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Basic client-side validation
        if (!username || !mobile || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save additional user info in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                username,
                email,
                mobile,
            });

            console.log('Registered:', user);
            // alert('User registered successfully!');
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'User registered successfully.',
            }).then(() => {
                window.location.href = '/login'; 
            });
        } catch (error: any) {
            console.error('Registration error:', error);
            // alert(`Error registering user: ${error.message}`);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Error registering user: ${error}`,
            });
        }
    });

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
