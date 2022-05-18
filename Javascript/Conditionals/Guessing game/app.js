// create secretNumber

var secretNumber = 4;

//ask user for guess
var stringGuess = prompt('Guess a number');
var guess = Number(stringGuess);
alert(guess);

//Check if guess is right print you got it right

if (Number(guess) === secretNumber) {
    alert('YOU GOT IT RIGHT');
}
// if guess is wrong
/*else {
    alert('Wrong!!')
}*/

// Too high
else if (Number(guess) > secretNumber) {
    alert('Too High Guess Again!!')
}
// Too low
else if (Number(guess) < secretNumber) {
    alert('Too Low Guess Again!!')
}