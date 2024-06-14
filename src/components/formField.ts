export function createFormField(id: string, label: string, type: string): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('input-field', 'col', 's12');

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.classList.add('validate');

    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', id);
    labelElement.textContent = label;

    div.appendChild(input);
    div.appendChild(labelElement);

    return div;
}