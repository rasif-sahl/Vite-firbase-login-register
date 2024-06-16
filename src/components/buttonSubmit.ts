export function createSubmitButton(buttonText: string): HTMLButtonElement {
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('btn', 'waves-effect', 'waves-light', 'blue', 'btn-custom');
    submitButton.textContent = buttonText;
    return submitButton;
}
