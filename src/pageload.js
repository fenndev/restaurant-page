import loadContactPage from "./contact";
import loadMainPage from "./main-page";

export default function pageLoad(pageName) {
    switch(pageName) {
        case "menu":
            loadMenuPage();
            break;
        case "contact":
            loadContactPage();
            break;
        case "main":
            loadMainPage();
            break;
    }
}