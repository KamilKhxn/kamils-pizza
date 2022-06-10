const content = document.getElementById('content');

const appendFunc = (parent, child) => {
    parent.appendChild(child);
}

// header helper methods
const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('design');
    return header;
}

const createTitle = () => {
    const title = document.createElement('div');
    title.setAttribute("id", "title");
    title.innerHTML = 'Papas Pizza';
    return title;
}

const createNav = () => {
    const nav = document.createElement('div');
    nav.classList.add('topnav');

    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.innerHTML = 'Home';
    home.href = '#home';

    menu.innerHTML = 'Menu';
    menu.href = '#menu';

    contact.innerHTML = 'Contact';
    contact.href = '#contact';

    appendFunc(nav, home);
    appendFunc(nav, menu);
    appendFunc(nav, contact);

    return nav;
}

// main display helper functions
const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    return container;
}

const createDisplay = () => {
    const display = document.createElement('div');
    display.classList.add('display');
    display.classList.add('design');
    return display;
}

const createUpperText = (upperText) => {
    const word1 = document.createElement('div');
    word1.classList.add('upper');
    word1.innerHTML = upperText;
    return word1;
}
const createLowerText = (lowerText) => {
    const word2 = document.createElement('div');
    word2.classList.add('lower');
    word2.innerHTML = lowerText;
    return word2;
}

const createImg = (imageUrl, imageId) => {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.setAttribute("id", imageId);
    return image;
}

// footer helper method
const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.classList.add('design');
    footer.innerHTML = 'Created by ';

    const anchorFooter = document.createElement('a');
    anchorFooter.innerHTML = 'Kamilkhxn';
    anchorFooter.href = 'https://github.com/KamilKhxn/kamils-pizza';
    anchorFooter.target = '_blank';

    appendFunc(footer, anchorFooter);

    return footer;
}


const header = () => {
    // creating the header div 
    const headerContainer = createHeader();
    appendFunc(content, headerContainer);

    // creating the title 
    const title = createTitle();
    appendFunc(headerContainer, title);

    // creating navigation bar
    const navigationBar = createNav();
    appendFunc(headerContainer, navigationBar);
}

const mainDisplay = (upperText, imageUrl, imageId, lowerText) => {

    const container = createContainer();
    appendFunc(content, container);

    const display = createDisplay();
    appendFunc(container, display);

    const upper = createUpperText(upperText);
    appendFunc(display, upper);

    const image = createImg(imageUrl, imageId);
    appendFunc(display, image);

    const lower = createLowerText(lowerText);
    appendFunc(display, lower);
}

const footer = () => {
    const footer = createFooter();
    appendFunc(document.body, footer)
}

export { header, mainDisplay, footer, appendFunc };