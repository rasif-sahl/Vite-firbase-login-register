export function createFormField(id: string, label: string, type: string): HTMLDivElement {
    const formField = document.createElement('div');
    formField.classList.add('input-field', 'col', 's12');

    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.classList.add('validate');

    const labelElement = document.createElement('label');
    labelElement.htmlFor = id;
    labelElement.textContent = label;

    formField.appendChild(input);
    formField.appendChild(labelElement);

    return formField;
}