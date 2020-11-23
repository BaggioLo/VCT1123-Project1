// Creating link within head and setting attributes //
var addToHead = document.querySelector('head');
var cssLink = document.createElement('link');
addToHead.appendChild(cssLink);
cssLink.rel = "stylesheet";
cssLink.href = "css/style.css";

// Create a variable wrapper //

var bodY = document.querySelector('body');
var wrapper = document.createElement('div');
bodY.appendChild(wrapper);

document.getElementsByTagName('div')[0].classList.add('wrapper');

// div is properly added into the body //

for (var i = 0; i < 4; i++) {
    var divs = document.createElement("div");
    divs.classList = 'wrapperDivs';
    wrapper.appendChild(divs);
}

var color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";
var color2 = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
var color3 = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
var color4 = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)";

colorsArray = [color1, color2, color3, color4];

var wrapper_Divs = document.getElementsByClassName('wrapperDivs');

// console.log(wrapper_Divs) it is running smoothly

var divOne = wrapper_Divs.item(0);
var divTwo = wrapper_Divs.item(1);
var divThree = wrapper_Divs.item(2);
var divFour = wrapper_Divs.item(3); 

var allDivs = [divOne, divTwo, divThree, divFour];


/* Messing around...Figured out that wrapper_Divs was not connected to anything...nor 
was allDivs..I had a syntax issure, and then it finally all worked...yikes...
wrapper_Divs[0].style.backgroundImage = colorsArray[0];
wrapper_Divs[1].style.backgroundImage = colorsArray[1]; */

for (i = 0; i < 4; i++){
    myDiv = allDivs[i];
    myDiv.style.backgroundImage = colorsArray[i];
    var update = document.createElement('section');
    myDiv.appendChild(update); 
    myDiv.setAttribute('id', 'ID' + [i]);
}

function Artist (aristname, album, label, year, albumlmg, bio){
    this.artistname = artistname;
    this.album = album;
    this.label = label;
    this.year = year;
    this.albumlmg = albumlmg;
    this.bio = bio;
}



