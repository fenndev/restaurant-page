function pageLoad(content) {
    console.log(content)
    let image = document.createElement('img');
    image.setAttribute('src', './bar.jpeg');
    let headline = document.createElement('h2');
    headline.textContent = "Disco Bar";
    let tagline = document.createElement('h3');
    tagline.textContent = "Party like it's 1987!";
    let copy = document.createElement('p');
    copy.textContent = "There's always a new experience waiting at the restaurant, be it a different temporal reality or existential insight; having an existential crisis while waiting for your meal is even encouraged. Eat, drink, shift realities and lose your self!";
    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(tagline);
    content.appendChild(copy);
}

export default pageLoad;