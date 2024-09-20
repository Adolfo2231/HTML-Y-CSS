// The function querySelectorAll() returns a collection of all elements that match a CSS-like selector, similar to querySelector but allowing you to grab all matching elements at once.
const elements = document.querySelectorAll(".error");


for(let element of elements){
element.style.backgroundColor = "pink";
element.style.border = "1px solid red";
}