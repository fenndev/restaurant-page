export default function loadContactPage() {
    let headline = document.createElement('h2');
    headline.textContent = "This is Just a Test Sweetie";
    let tagline = document.createElement('h3');
    tagline.textContent = "Die, haha!";
    let copy = document.createElement('p');
    copy.textContent = "Oh, you're reading this?";
    contentBody.appendChild(headline);
    contentBody.appendChild(tagline);
    contentBody.appendChild(copy);
};