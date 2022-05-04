import loadContactPage from "./contact-page";
import loadMainPage from "./main-page";

export default function pageLoad(pageName) {
    console.log(content);
    switch(pageName) {
        case "menu":
            loadMenuPage();
            break;
        case "contact":
            loadContactPage();
            break;
        default:
            loadMainPage();
            break;
    }
}