let randomNumber = Math.floor(Math.random() * 100) + 1; //  + 1 ensures that the smallest number is 1 (not 0), and the largest possible number is 100 (not 99), effectively cover the range 1 to 100

let attempts = 10;
let guessArray = []; 

const guessField = document.querySelector('.guessField');
const lowOrHi = document.querySelector('.lowOrHi');
const lastResult = document.querySelector('.lastResult');
const guesses = document.querySelector('.guesses');
const guessSubmit = document.querySelector('.guessSubmit');

guessSubmit.onclick = function(e) {
    e.preventDefault(); // prevent page reload

    const guess = Number(guessField.value);
    attempts--;
    guessArray.push(guess);  
    lastResult.textContent = attempts;
    guesses.textContent = guessArray 
    guessField.value = '';  // Clear input field automatically after the guess is submitted
    
    
    if (guess === randomNumber) {
        lowOrHi.textContent = 'Congratulations! You got it right!';
        lowOrHi.style.color = 'green';
        resetGame();
    } else if (attempts === 0) {
        lowOrHi.textContent = 'Game Over! The number was ' + randomNumber;  // => after game over tells right answer
        lowOrHi.style.color = 'red';
        resetGame();
    } else {
        lowOrHi.textContent = guess < randomNumber ? 'Too low!' : 'Too high!';
        lowOrHi.style.color = 'orange';
    }
};

function resetGame() {
    // Disable the input and submit button
    guessField.disabled = true;
    guessSubmit.disabled = true;

    // Create and append a reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.onclick = () => location.reload(); // reload webpage
    document.querySelector('#wrapper').appendChild(resetButton);
}
