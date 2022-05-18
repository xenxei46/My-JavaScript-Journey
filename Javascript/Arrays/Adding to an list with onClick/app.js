//Array Exercise

const btn = document.getElementById('btn');
const del = document.getElementById('del');
const array = document.getElementById('array');

btn.addEventListener('click', addItem);
del.addEventListener('click', delItem);
array.addEventListener('click', createList);
let list = []

function addItem() {
  console.log('fired');
  list.push('marvel');
  console.log(list);
}

function delItem() {
    console.log('deleted');
    list.pop();
    console.log(list);
}

function createList() {
    array.
}