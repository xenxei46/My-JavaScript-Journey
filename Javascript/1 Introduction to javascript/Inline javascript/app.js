var array = prompt('Functions yay!!');
console.log(array);

// Create a variable , assign to Function (not value), use var
//diff - hoisting, use - arrow func, libraries

//Function Definition/Declaration  
function addValues(num1, num2) {
    return num1 + num2
}

// Invoke / Call the function
const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//function expression
const add = function (num1, num2) {
    return num1 + num2;
};

//const thirdValue = add[5, 6];
const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

const multiply = (num1, num2) => num1 * num2;








