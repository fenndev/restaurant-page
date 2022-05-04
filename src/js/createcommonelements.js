export default function createCommonElements() {
    let tabBox = document.createElement('div');
    tabBox.id = "tabBox";
    content.appendChild(tabBox);
    let mainButton = document.createElement('div');
    let menuButton = document.createElement('div');
    let contactButton = document.createElement('div');
    mainButton.id = "mainButton";
    menuButton.id = "menuButton";
    contactButton.id = "contactButton";
    mainButton.classList.add("btn");
    menuButton.classList.add("btn");
    contactButton.classList.add("btn");
    mainButton.textContent = "Main";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";

    tabBox.appendChild(mainButton);
    tabBox.appendChild(menuButton);
    tabBox.appendChild(contactButton);
    let contentBody = document.createElement('div');
    contentBody.id = "contentBody";
    content.appendChild(contentBody);
}