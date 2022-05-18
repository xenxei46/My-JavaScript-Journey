//Ojects: Collection of properties(this properties can be called keys)
//methods
//Dot Notation

var array = prompt('Object yay!!');
console.log(array);

const person = {
    name: 'john',
    lastName: 'peters',
    age: 23,
    education: false,
    married: true,
    siblings: ['anna', 'sussy', 'peter'],
    greetings() {
        console.log('Hello my name is JOHN')
    },
};


const age = person.age;
console.log(age);
person.name = 'bob';
console.log(person.name)
console.log(person.siblings[2]);
person.greetings();







