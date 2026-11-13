```javascript
// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Store the number of attempts
let attempts = 0;

// Function to check the guessed number
function checkGuess() {

    let userGuess = Number(document.getElementById("guessInput").value);

    let message = document.getElementById("message");

    // Check empty input
    if (userGuess === 0 || userGuess < 1 || userGuess > 10 || document.getElementById("guessInput").value === "") {
        message.textContent = "Please enter a number between 1 and 10!";
        return;
    }

    attempts++;

    document.getElementById("attempts").textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
    }
    else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    }
    else {
        message.textContent = "Too low! Try again.";
    }
}

// Function to restart the game
function resetGame() {

    randomNumber = Math.floor(Math.random() * 10) + 1;

    attempts = 0;

    document.getElementById("attempts").textContent = attempts;

    document.getElementById("guessInput").value = "";

    document.getElementById("message").textContent = "";
}
```
