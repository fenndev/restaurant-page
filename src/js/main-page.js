import flowerImage from "../images/flower.jpg";

export default function loadMainPage() {
    let headline = document.createElement('h2');
    headline.textContent = "The Disco Bar";
    let tagline = document.createElement('h3');
    tagline.textContent = "Party like it's 1987!";
    let copy = document.createElement('p');
    copy.textContent = "There's always a new experience waiting at the restaurant, be it a different temporal reality or existential insight; having an existential crisis while waiting for your meal is even encouraged. Eat, drink, shift realities and lose your self!";
    let image = document.createElement('img');
    image.setAttribute('src', `${flowerImage}`);
    image.classList.add('main-img');
    contentBody.appendChild(headline);
    contentBody.appendChild(tagline);
    contentBody.appendChild(copy);
    contentBody.appendChild(image);
};