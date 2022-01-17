/*jshint esversion: 6 */
const body = document.querySelector("body");
const contentDiv = document.getElementById("content");




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
    const empanadas = [];
    for(let i = 0; i < 2; i++){
        const nbr = i +1;
        empanadas[i] = document.createElement("img");
        empanadas[i].setAttribute("src","empanadas"+nbr+".png");
        empanadas[i].classList.add("logoPic");
        logo.appendChild(empanadas[i]);
    }

    const textDiv = document.createElement("div");

    textDiv.innerHTML = "Mr. Elk's Empanadas";

    logo.setAttribute("id","logo");

    logo.insertBefore(textDiv,logo.lastChild);
    
    blurDiv.appendChild(logo);

};

const makeTextBox = function(){
    element = document.createElement("div");
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
    paragraph.innerHTML = "At Mr. Elk's Empanadas, Mr Elk takes great pride in serving ourcustomers authentic empanadas combined with sensations from the wast forrests of Sweden, Mr Elk's home country. It's a Spanish-Swedish fusion and it's all the rage!";

    textBox.appendChild(paragraph);

    const image = document.createElement("img");
    image.setAttribute("src","delicious-typical-meat-empanada-argentina.jpg");
    image.setAttribute("id","empanadasPhoto");

    textBox.appendChild(image);

    blurDivElement.appendChild(textBox);
};

const menuPage = function(){
    contentDiv.innerHTML ="";
    const blurDivElement = blurDiv();
    
    logo();

    const textBox = makeTextBox();
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menú - Matsedel";

    textBox.appendChild(menuTitle);



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
};

startFunction();



