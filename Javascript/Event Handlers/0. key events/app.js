//Event handlers
//select element
// addEventListener()
// what event, what to do 

//key events
//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released

const nameInput = document.getElementById('name');
//nameInput.addEventListener('keypress', function(){
    //console.log('you pressed a key');
//});

//nameInput.addEventListener('keydown', function(){
    //console.log('you pressed a key');
//});

nameInput.addEventListener('keyup', function(){
    console.dir(nameInput.value);
});

//Click Event 
const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2');


btn.addEventListener('click', function() {
  console.log('hey, you clicked me')
  h2.classList.add('dark');
});
