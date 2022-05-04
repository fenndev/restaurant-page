import flowerImage from "../images/flower.jpg";

export default function loadMainPage() {
    let headline = document.createElement('h2');
    headline.textContent = "The Disco Bar";
    let tagline = document.createElement('h3');
    tagline.textContent = "Party like it's 1987!";
    let copy = document.createElement('p');
    copy.textContent = "Stranger things have happened! Join is for a one-of-a-kind, timeless experience at The Disco Bar!";
    let image = document.createElement('img');
    image.setAttribute('src', `${flowerImage}`);
    image.classList.add('main-img');
    contentBody.appendChild(headline);
    contentBody.appendChild(tagline);
    contentBody.appendChild(copy);
    contentBody.appendChild(image);
};