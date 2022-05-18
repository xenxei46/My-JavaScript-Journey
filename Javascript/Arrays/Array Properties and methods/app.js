//Array Properties and Methods.

let names = ['john', 'excel', 'harry','phill','wisdom'];

//length
console.log(names.length);
console.log(names[4]);
console.log(names[names.length - 1])

//concat
const lastNames = ['pepper','onion','banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift - adding new data to the start of an array
allNames.unshift('susy');
allNames.unshift('anna');
allNames.unshift('xen');
console.log(allNames);

//shift - does revese of unshift
allNames.shift();

//push - add to the end of an array
allNames.push('marvel')
console.log(allNames);

//pop - does the reverse of push
allNames.pop();
console.log(allNames);

//splice - Grab specific item out of the array - mutates the original array
const specificNames = allNames.splice(0, 3);
console.log(specificNames)





