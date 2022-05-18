//For each
//The importance of forEach: is that when you have an array you can use this method to select each variale and its properties on the array.
//Set-up a function reference it pass call back function invoke it, the essence of learning all these is to usher in project mood.
console.log('forEach')
const people = [
    {
        name: 'bob', age: 20, position: 'developer'
    },
    {
        name: 'Hussein', age: 25, position: 'designer'
    },
    {
        name: 'xenxei', age: 23, position: 'The Boss'
    },
]


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


