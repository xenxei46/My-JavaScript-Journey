// createElement('element')
// createTextNode('text content')
// element.appendChild

const create = document.querySelector('#create');

// create empty element

const bodyDiv = document.createElement('div');

//create text node 

const text = document.createTextNode(' a simple body div')
bodyDiv.appendChild(text);
//document.body.appendChild(bodyDiv);
//insertBefore
document.body.insertBefore(bodyDiv, create);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

//create.appendChild(heading);

//parent element and chaining
 const heading3 = document.querySelector('h3');
 //console.log(heading3.parentElement.parentElement.parentElement);
 const parent = heading3.parentElement;
 parent.style.color = 'red'; 

//replaceChild('new','old);

smallHeading = document.createElement('h6');
smallText = document.createTextNode(`i'm a small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
//console.log(create.children);

//prepend
//innerText

const header = document.createElement('h2');
header.innerText = `i am a dynamic heading`;
document.body.prepend(header);

//remove
//removeChild

const remove = document.querySelector('#remove');
//remove.remove();

const head = remove.querySelector('h2');
remove.removeChild(head)
console.log(head);








