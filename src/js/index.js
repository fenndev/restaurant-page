import '../css/style.css';
import pageLoad from './pageload';
import createCommonElements from './createcommonelements';


const pageManager = (() => {
    createCommonElements();
    pageLoad("main");
    
    function wipeInnerContent() {
        contentBody.textContent = "";
    }

    mainButton.addEventListener('click', () => {
        wipeInnerContent();
        pageLoad("main");
    });

    contactButton.addEventListener('click', () => {
        wipeInnerContent();
        pageLoad("contact");
    });
})();