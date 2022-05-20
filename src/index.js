import homePage from "./home.js";
import contactPage from "./contact.js";
import menuPage from "./menu.js";
import { header } from "./outline.js";

let element = document.getElementById("content");

const main = () => {
    header();
    homePage();

    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', event => {
            if (item.innerHTML === 'Menu') {
                remove();
                menuPage();
            }
            if (item.innerHTML === 'Contact') {
                remove();
                contactPage();
            }
            if (item.innerHTML === 'Home') {
                remove();
                homePage();
            }
        })
    })
}

const remove = () => {
    element.removeChild(element.lastChild);
}

main();