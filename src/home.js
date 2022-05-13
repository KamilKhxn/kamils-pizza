const homepage = () => {
    // div element in html for the whole document 
    const content = document.getElementById('content');

    // header in content
    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('design');
    content.appendChild(header);

    // title in header 
    const title = document.createElement('div');
    title.setAttribute("id", "title");
    title.innerHTML = 'Mamas pizza';
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
    home.href = '#home'
    nav.appendChild(menu);
    menu.href = '#menu'
    nav.appendChild(contact);
    contact.href = '#contact'
    header.appendChild(nav);

    // container for the middle display 
    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    // display element which has the opacity => display is in container
    const display = document.createElement('div');
    display.classList.add('display');
    display.classList.add('design');
    container.appendChild(display);

    // upper words in display 
    const word1 = document.createElement('div');
    word1.classList.add('upper');
    word1.innerHTML = 'Made with passion since 1942';
    display.appendChild(word1);

    // image in display => middle of sentences
    const image = document.createElement('img');
    image.src = 'images/chef.png';
    image.setAttribute("id", "chef-pic");
    title.setAttribute("id", "title");
    display.appendChild(image);

    // lower words in display 
    const word2 = document.createElement('div');
    word2.classList.add('lower');
    word2.innerHTML = 'Order online or visit us';
    display.appendChild(word2);



}
export default homepage

//     < div class='header design' >

// <div id='title'>Mama's Pizza</div>
// <div class="topnav">
//     <a class="active" href="#home">Home</a>
//     <a href="#menu">Menu</a>
//     <a href="#contact">Contact</a>

// </div>
// </div >
//     <div class='container'>

//         <div class='display design'>
//             <div class='upper'>Made with passion since 1942</div>
//             <img id='chef-pic' src="images/chef.png" alt="">
//                 <div class='lower'>Order online or visit us!</div>
// </div>
//         </div>