// adding html code to homepage
// main homepage
// import other modules for other tabs

import homepage from "./home.js";
import contactPage from "./contact.js";
import menuPage from "./menu.js";


const main = () => {
    homepage();
    // while (true) {
    checkTabPressed('true');
    // }
}

const removeData = () => {
    let element = document.getElementById("content");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const checkTabPressed = () => {


    document.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', (bool) => {
            let tabPressed = item.innerHTML;
            // console.log(tabPressed + 'index.js');

            if (tabPressed === 'Menu') {
                removeData();
                menuPage();
                // setTimeout(removeData(), 10000);

                console.log('menu pressed');
            }

            if (tabPressed === 'Contact') {
                removeData();
                contactPage();
                console.log('contact pressed');
            }


        })
    })
}

main();