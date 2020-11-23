// Creating link within head and setting attributes //
var addToHead = document.querySelector('head');
var cssLink = document.createElement('link');
addToHead.appendChild(cssLink);
cssLink.rel = "stylesheet";
cssLink.href = "css/style.css";


