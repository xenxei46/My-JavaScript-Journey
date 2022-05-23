// Higher order function a function that is passed inside another function
function morning(name) {
    return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
    return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
    const myName = 'john';
    console.log(`${cb(name)}, my name is ${myName}`);
}

// call back function  - a function that is been passed as an argument 
greet('bobo', morning);
greet('peter', afternoon);

