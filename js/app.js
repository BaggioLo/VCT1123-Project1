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
