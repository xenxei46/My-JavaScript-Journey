// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.getElementById('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = ` <li class="item">${randomVar}</li>
<li>item 2</li>
<li>item 2</li>`
document.body.appendChild(ul);