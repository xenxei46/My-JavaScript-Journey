//For each
//The importance of forEach: is that when you have an array you can use this method to select each variale and its properties on the array.
//Set-up a function reference it pass call back function invoke it, the essence of learning all these is to usher in project mood.

console.log('')
console.log('forEach')
const people = [
    {
        name: 'bob', age: 20, position: 'developer', id: 1
    },
    {
        name: 'Hussein', age: 25, position: 'designer', id: 2
    },
    {
        name: 'xenxei', age: 23, position: 'The Boss', id: 3
    },
];


function showPerson(person){
 console.log(person.position.toUpperCase());    
}

//Options to pass in call backfunction - 1st by reference 
//people.forEach(showPerson);

// 2nd - Pass it directly by setting up a function and params
people.forEach(function(item){
    console.log(item.position.toUpperCase());
    console.log(item.age);
    console.log(item.name);
})

console.log('')
console.log('map method');
//Map
//does not return a new array
//does not change size of original array
//uses values from original array when making new one

const cadites = [
    { name: 'excel', age: 24, position: 'developer' },
    { name: 'wisdom', age: 23, position: 'developer' },
    { name: 'marvel', age: 20, position: 'developer' },
];

const ages = cadites.map(function (staff) {
  console.log(staff);
  return staff.age + 20;
});

//uses values from original array when making new one (array modification)
const newStaffs = cadites.map(function (staff) {
    return {
        firstName: staff.name.toUpperCase(),
        oldAge: staff.age + 20,
    }
    
})

//edit array data and display on screen
const names = people.map(function(person)
{
    return `<h1>${person.name}</h1>`;
})
console.log(names);

document.body.innerHTML = names.join('');

console.log('')
//Filter 
//does return a new array
//Can Manipuate  the size of an array
// returns based on conditions
console.log('Filter Method')
const youngPeople = people.filter(function (person){
    return person.position === 'developer';
})
console.log(youngPeople)

//Find
//returns single instance - (in this case object);
// returns first match, if no match understand
//great for getting unique value
console.log('')
console.log('find method');
const Devs = [
    {name: 'marvel', age: 20, position: 'developer', id: 1 },
    {name: 'isaac', age: 20, position: 'developer', id: 2 },
    {name: 'Daniel', age: 20, position: 'developer', id: 3 },
    {name: 'David', age: 20, position: 'developer', id: 4 },
];

console.log(Devs);

const newDevs = Devs.find(function (person) {
    console.log(person)
    return person.id === 2;     
});


const named = ['bob', 'uzi', 'wizzy'];

console.log(
    named.find(function (name) {
    return name === 'bob';
    })
);

console.log('')
console.log('Reduce Method')
//Reduce
//iterates, call back function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const iovStaffs = [
    {name: 'bob', age: 20, position: 'developer', id: 1, salary: 200},
    {name: 'gift', age: 0, position: 'developer', id: 2, salary: 300},
    {name: 'tina', age: 20, position: 'developer', id: 3, salary: 400},
    {name: 'vic', age: 20, position: 'developer', id: 4, salary: 500},
];

const total = iovStaffs.reduce(function(acc, currItem){
    console.log(`total ${acc}`);
    console.log(`current money : ${currItem.salary}`);

    acc += currItem.salary;
    return acc;
},200);

console.log(total);

