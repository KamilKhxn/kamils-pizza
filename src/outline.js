const content = document.getElementById('content');

const appendFunc = (parent, child) => {
    parent.appendChild(child);
}

// header helper methods
const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('design');
    // content.appendChild(header);
    // appendFunc('content', header);
    return header;
}

const createTitle = () => {
    const title = document.createElement('div');
    title.setAttribute("id", "title");
    title.innerHTML = 'Papas Pizza';
    // appendFunc('content', headerContainer);
    return title;
}

const createNav = () => {
    const nav = document.createElement('div');
    // nav.classList.add('topnav');
    nav.classList.add('topnav');

    // const home = document.createElement('a');
    // const menu = document.createElement('a');
    // const contact = document.createElement('a');

    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    // home.classList.add('tablinks');
    // home.setAttribute("id", "home");

    // menu.classList.add('tablinks');
    // menu.setAttribute("id", "menu");

    // contact.classList.add('tablinks');
    // contact.setAttribute("id", "contact");


    home.innerHTML = 'Home';
    home.href = '#home';
    menu.innerHTML = 'Menu';
    menu.href = '#menu';
    contact.innerHTML = 'Contact';
    contact.href = '#contact';

    // home.classList.add('active');
    appendFunc(nav, home);
    appendFunc(nav, menu);
    appendFunc(nav, contact);

    return nav;
}

// main display helper functions
const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    // appendFunc(content, container);
    // content.appendChild(container);
    return container;
}

const createDisplay = () => {
    const display = document.createElement('div');
    display.classList.add('display');
    display.classList.add('design');
    // container.appendChild(display);
    return display;
}

const createUpperText = (upperText) => {
    const word1 = document.createElement('div');
    word1.classList.add('upper');
    word1.innerHTML = upperText;
    // display.appendChild(word1);
    return word1;
}
const createLowerText = (lowerText) => {
    const word2 = document.createElement('div');
    word2.classList.add('lower');
    word2.innerHTML = lowerText;
    // display.appendChild(word2);
    return word2;
}

const createImg = (imageUrl, imageId) => {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.setAttribute("id", imageId);
    // display.appendChild(image);
    return image;
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

    // const activeTab = document.createElement('a');
    // activeTab.classList.add('active');
    // activeTab.href = '#' + active;
    // // activeTab.innerHTML = active;
    // console.log(active);
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
    // return container;
}

export { header, mainDisplay };