import * as outline from './outline.js';

const menuPage = () => {
    outline.header('menu', 'Mamas Pizza');
    // outline.mainDisplay('☎️ 123 456 7890', 'images/cn-map.png', 'map-pic', '290 Bremner Blvd, Toronto');
    menuLayout();
}

const menuLayout = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('menu-container');
    content.appendChild(container);

    // // display element which has the opacity => display is in container
    const display = document.createElement('div');
    display.classList.add('menu-display');
    display.classList.add('design');
    container.appendChild(display);

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');

    let menuItemsArr = []

    menuItemsArr.push(item1);
    menuItemsArr.push(item2);
    menuItemsArr.push(item3);
    menuItemsArr.push(item4);
    menuItemsArr.push(item5);
    menuItemsArr.push(item6);


    for (let i = 0; i < menuItemsArr.length; i++) {
        // menuItemsArr[i].classList.add('menu-items');
        menuItemsArr[i].setAttribute("id", 'menu-items');

        display.appendChild(menuItemsArr[i]);

    }

    for (let i = 0; i < menuItemsArr.length; i++) {
        const image = document.createElement('img');
        const itemTitle = document.createElement('div');
        const itemDescription = document.createElement('div');

        const imgArr = ['images/salsiccia.png', 'images/pomodoro.png', 'images/crema.png', 'images/gamberi.png', 'images/disgustoso.png', 'images/pepe.png'];
        image.src = imgArr[i];
        image.setAttribute("id", 'pizza-pic');

        const titlesArr = ['Salsiccia', 'Pomodoro', 'Crema', 'Gamberi', 'Disgustoso', 'Pepe'];
        itemTitle.innerHTML = titlesArr[i];

        const salsicciaDescription = 'Tomato sauce, Mozarella, Tomato, Basil, Pepperoni';
        const PomodoroDescription = 'Alfredo sauce, Feta Cheese, Tomato, Onions, Chili';
        const cremaDescription = 'Alfredo sauce, Mozarella, Shrimp, Salmon, Basil, Olives, Pineapple';
        const gamberiDescription = 'Tomato sauce, Feta Cheese, Shrimp, Olives, Basil';
        const disgustosoDescription = 'Tomato sauce, Bacon, Pineapple, Basil, Olives';
        const pepeDescription = 'Alfredo sauce, Mozarella, Olives, Basil, Chilli Flakes';

        const desciptionsArr = [salsicciaDescription, PomodoroDescription, cremaDescription, gamberiDescription, disgustosoDescription, pepeDescription];
        itemDescription.innerHTML = desciptionsArr[i];
        itemDescription.classList.add('item-description');


        menuItemsArr[i].appendChild(image);
        menuItemsArr[i].appendChild(itemTitle);
        menuItemsArr[i].appendChild(itemDescription);
    }
};

export default menuPage;