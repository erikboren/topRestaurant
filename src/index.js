/*jshint esversion: 6 */
import './style.css';
import empanadas1 from './empanadas1.png';
import empanadas2 from './empanadas2.png';
import empanadaPhoto from './delicious-typical-meat-empanada-argentina.jpg';

const body = document.querySelector("body");
const contentDiv = document.getElementById("content");

const footer = function(){
    const footerDiv = document.createElement("div");
    footerDiv.setAttribute("id","footerDiv");

    const attribute = ["<a href='https://www.freepik.com/vectors/background'>Background vector created by barudakvisual - www.freepik.com</a>",
        "<a href='https://www.freepik.com/photos/food'>Food photo created by wirestock - www.freepik.com</a>"];

    attribute.forEach(attribution=>{
        const element = document.createElement("div");
        element.innerHTML = attribution;
        element.classList.add("attribution");
        footerDiv.appendChild(element);
    });

    body.appendChild(footerDiv);
};

const blurDiv = function(){
    const contentDiv = document.getElementById("content");
    const div =  document.createElement('div');
    div.setAttribute("id",'blur-div');
    contentDiv.appendChild(div);
    return div;
};

const logo = function(){
    const blurDiv = document.getElementById("blur-div");
    const logo = document.createElement("div");
    
    const empanadas1pic = new Image();
    empanadas1pic.src = empanadas1;
    empanadas1pic.classList.add("logoPic");

    const empanadas2pic = new Image();
    empanadas2pic.src = empanadas2;
    empanadas2pic.classList.add("logoPic");
    
    logo.appendChild(empanadas1pic);
    logo.appendChild(empanadas2pic);

    const textDiv = document.createElement("div");

    textDiv.classList.add("logoText");

    textDiv.textContent = "Mr. Elk's Empanadas";

    logo.setAttribute("id","logo");

    logo.insertBefore(textDiv,logo.lastChild);
    
    blurDiv.appendChild(logo);

};

const makeTextBox = function(){
    const element = document.createElement("div");
    element.classList.add("textBoxDiv");
    return element;
};
const homePage = function(){
    
    contentDiv.innerHTML ="";
    const blurDivElement = blurDiv();
    
    logo();
    const textBox = makeTextBox();
    
    const heading = document.createElement("h1");
    heading.innerHTML = "¡Bienvenido! - Välkommen!";
    textBox.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "At Mr. Elk's Empanadas, Mr Elk takes great pride in serving our customers authentic empanadas combined with sensations from the wast forests of Sweden, Mr Elk's home country. It's a Spanish-Swedish fusion and it's all the rage!";

    textBox.appendChild(paragraph);

    const image = new Image();
    image.src = empanadaPhoto;

    image.setAttribute('id','empanadasPhoto');

    textBox.appendChild(image);

    blurDivElement.appendChild(textBox);
};




const menuPage = function(){
    const menuItem = function(name,desc){
        const item = document.createElement('div');
        item.classList.add("menuItem");

        const menuName = document.createElement("h2");
        const menuDesc = document.createElement("p");

        menuName.textContent=name;
        menuDesc.textContent=desc;

        item.appendChild(menuName);
        item.appendChild(menuDesc);
        return item;
    };
    
    const menuList = [
        ["Fir needle empanadas" , "Winner of Green Guide most innovative dish four years in a row. Fir needle from Mr. Elk's private forest"],
        ["Herring stuffed empanadas", "Do you dare to try this Swedish-Spanish fusion?"],
        ["Empanadas hamburger", "For the children and the mini Elks. All the goodies of a hamburger, stuffed into an empanada"]
    ];

    contentDiv.innerHTML ="";
    const blurDivElement = blurDiv();
    
    logo();

    const textBox = makeTextBox();
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menú - Matsedel";

    textBox.appendChild(menuTitle);

    menuList.forEach(dish =>{
        console.log(dish[1]);
        const item = menuItem(dish[0],dish[1]);
        textBox.appendChild(item);
    });

    blurDivElement.appendChild(textBox);
};

const aboutPage = function(){
    contentDiv.innerHTML ="";
    const blurDivElement = blurDiv();
    
    logo();

    const textBox = makeTextBox();
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Si - Om";

    textBox.appendChild(aboutTitle);

    blurDivElement.appendChild(textBox);
};

const navBar = function(){
    const navBar = document.createElement("div");
    const buttons = ["home", "menu", "about"];

    navBar.setAttribute("id",'navBar');

    buttons.forEach(buttonText =>{
        const button = document.createElement("button");
        button.textContent = buttonText;
        button.classList.add("navButton");
        button.onclick = function(){
            switch(buttonText){
                case "home":
                    homePage();
                    break;
                case "menu":
                    menuPage();
                    break;
                case "about":
                    aboutPage();
                    break;
                default:
                    break;
            }
            };
        navBar.appendChild(button);
    });

    body.insertBefore(navBar,body.firstChild);
    return navBar;
};

const startFunction = function(){
    navBar();
    homePage();
    footer();
};

startFunction();



