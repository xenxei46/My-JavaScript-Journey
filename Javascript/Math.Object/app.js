// Math
// Standard built-in objrcts - always available

//const number = 8.16789; 
//const result = Math.floor(number);

//const number = 4.16789;
//const result = Math.ceil(number)

//const number = 7;
//const result = Math.sqrt(number)

//const number = Math.PI;
//const result = Math.min(4, 5, 6, 7, 9);
//const result = Math.max(4, 5, 6, 7, 9);

const result = Math.ceil( Math.random() * 10 + 1);

console.log(result);

console.log('');

console.log('Date');
//Date 

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septemer',
    'October',
    'November',
    'December',
];


const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day])

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

document.body.innerHTML = sentence;
