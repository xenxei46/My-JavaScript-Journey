// DOM Selectors

//getElementById('element')

//Select the element or group of elements we want
//Decide the effect we want to apply to the selection

const h1 = document.getElementById( 'title' );
h1.style.color = 'red';

const btn = document.getElementById('btn');

btn.style.backgroundColor = 'blue';
btn.style.color = 'white';


//getElemensByTagName( 'tagname' );
//node-list = array-like object
//index, lenght property but not array methods

const h2 = document.getElementsByTagName('h2');
h2[1].style.color = 'red';
//console.log(h2.length);

const items = document.getElementsByTagName('li');
const betterItems = [...items]

items[2].style.color = 'orange';

betterItems.forEach(function(item){
    console.log(item);
});

//getElementsByClassName('classname');
//node-list = array-like object
//index, lenght property but not array methods

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'blue';

//querySelector('any css'); - selects single
// querySelectorAll('any css'); - selects all

const result = document.querySelector('#result');
result.style.backgroundColor= 'blue';

const item = document.querySelector('.select');
console.log(item);

const lastItem = document.querySelector('li:last-child');
//console.log(lastItem);

const last = document.querySelector('.select:last-child');
//console.log(last);

const list = document.querySelectorAll('.select');
//console.log(list);

//Irespective of the class and the fact that we used query selector all, still only
//one item will be selected. unless we use forEach to loop through the items
list.forEach(function(item){
    console.log(item);
    item.style.color = 'pink';
});








