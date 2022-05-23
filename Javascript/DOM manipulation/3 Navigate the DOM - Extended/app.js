//getAttribute()
//setAttribute()

const first = document.querySelector('.first');
const classValue = first.getAttribute('id');
//console.log(classValue);

const link =  document.getElementById('link');
const showLink = link.getAttribute('href');
//console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = ' i have a class of first';
//console.log(last);

const links = document.querySelectorAll('.first');
//console.log(links);

//add classes,remove classes and check the class
//className
//classList

const elemone = document.getElementById('elemone');
const elemtwo = document.getElementById('elemtwo');
const elemthree = document.getElementById('elemthree');

const color = elemone.className;
//console.log(color);

elemtwo.className = 'colors';
elemtwo.className = 'text';

//classList 
elemthree.classList.add('colors');

//elemthree.classList.add('colors');
elemthree.classList.add('text','colors');
elemthree.classList.remove('text');

const e3 = elemthree.classList;
//console.log(e3);

//contains
let containProp = elemthree.classList.contains('colors');
if(containProp){
    //console.log('hello world');
} else {
    //console.log('does not have the class ')
}



