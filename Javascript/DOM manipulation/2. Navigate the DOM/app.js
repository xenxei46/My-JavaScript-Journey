// Navigate the DOM
//Select the element or group of elements we want
//Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild


//const parent = document.querySelector('#children');
//const allChildren = parent.childNodes;
//console.log(allChildren);

//const child = parent.children;
//console.log(children);


//console.log(parent.firstChild);
//console.log(parent.lastChild);

// previousSibling
// nextSibling
// return whitespace

/*const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);*/

//nextElementSibling
//previousElementSibling

//const first = document.querySelector('.first');
//first.nextElementSibling.style.color = 'red';

//nodeValue
//textContent

const item = document.getElementById('node');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue);

