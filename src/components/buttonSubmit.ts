export function createSubmitButton(): HTMLButtonElement {
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('btn', 'waves-effect', 'waves-light', 'blue', 'btn-custom');
    submitButton.textContent = 'Login';
    return submitButton;
}
