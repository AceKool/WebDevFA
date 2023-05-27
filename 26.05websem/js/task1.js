// Prompt user for input
let userInput = prompt("Before we continue, can you please enter a number?");

// Check if user input is valid
if (isNaN(userInput)) {
  alert("Sorry, the value you entered is not a valid number.");
} else {
  // Display user input with a positive message
  alert("Great! You entered the number " + userInput + ". That's an awesome number!");
}