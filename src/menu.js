import { appendFunc } from "./outline.js";

const menuPage = () => {
    // outline.header('menu', 'Mamas Pizza');
    menuLayout();
}

const menuLayout = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('menu-container');
    appendFunc(content, container);

    // display element which has the opacity => display is in container
    const display = document.createElement('div');
    display.classList.add('menu-display');
    display.classList.add('design');
    appendFunc(container, display);

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');

    let menuItemsArr = [item1, item2, item3, item4, item5, item6]

    for (let i = 0; i < menuItemsArr.length; i++) {
        // adding id for each menu block
        menuItemsArr[i].setAttribute("id", 'menu-items');

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

        appendFunc(display, menuItemsArr[i]);
        appendFunc(menuItemsArr[i], image);
        appendFunc(menuItemsArr[i], itemTitle);
        appendFunc(menuItemsArr[i], itemDescription);
    }
};

export default menuPage;