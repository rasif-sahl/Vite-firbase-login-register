export function createCompanyName(): HTMLHeadingElement {
    const companyName = document.createElement('h1');
    companyName.classList.add('company-name');
    companyName.textContent = "onUgo";
    return companyName;
}
