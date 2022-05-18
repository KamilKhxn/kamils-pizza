const content = document.getElementById('content');

const header = (active, mainTitle) => {

    // active is the tab that is active

    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('design');
    content.appendChild(header);

    const title = document.createElement('div');
    title.setAttribute("id", "title");
    title.innerHTML = mainTitle;
    header.appendChild(title);

    // navigation bar in header 
    const nav = document.createElement('div');
    nav.classList.add('topnav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';
    nav.appendChild(home);
    home.href = '#home';
    nav.appendChild(menu);
    menu.href = '#menu';
    nav.appendChild(contact);
    contact.href = '#contact';


    const activeTab = document.createElement('a');
    activeTab.classList.add('active');
    activeTab.href = '#' + active;
    // activeTab.innerHTML = active;
    console.log(active);

    // <a class="active" href="#home">Home</a>

    header.appendChild(nav);
}

const mainDisplay = (upperText, imageUrl, imageId, lowerText) => {
    // // container for the middle display 
    // console.log('main display here');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    // // display element which has the opacity => display is in container
    const display = document.createElement('div');
    display.classList.add('display');
    display.classList.add('design');
    container.appendChild(display);

    // upper words in display 
    const word1 = document.createElement('div');
    word1.classList.add('upper');
    word1.innerHTML = upperText;
    display.appendChild(word1);

    // image in display => middle of sentences
    const image = document.createElement('img');
    image.src = imageUrl;
    image.setAttribute("id", imageId);
    // title.setAttribute("id", "title");
    display.appendChild(image);

    // lower words in display 
    const word2 = document.createElement('div');
    word2.classList.add('lower');
    word2.innerHTML = lowerText;
    display.appendChild(word2);
}

export { header, mainDisplay };