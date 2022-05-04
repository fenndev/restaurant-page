export default function loadContactPage() {
    let headline = document.createElement('h2');
    headline.textContent = "Contact";
    let contactList = document.createElement('ul');
    let address = document.createElement('li');
    let phoneNumber = document.createElement('li')
    let email = document.createElement('li')
    contentBody.appendChild(headline);
    contentBody.appendChild(contactList);
    contactList.appendChild(address);
    address.textContent = "8127 Nostalgia Road, Lakewood WA 98409";
    contactList.appendChild(phoneNumber);
    phoneNumber.textContent = "(887) 217-8431";
    contactList.appendChild(email);
    email.textContent = "thediscobar@retro.com";
};