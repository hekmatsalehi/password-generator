// Prompt the user to choose password criteria
// Length of Password (between 8 and 128 characters)
// Confirm for Lowercase, uppercase, numeric and symbols
// Validate the input. At least one character type should be selected
// Generate the password
// Display the password in an alert or on the page.

// Grab the Generate Password button
var generateBtn = document.querySelector("#generate");
// Declare globel variables as an array
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbersArray = ["0","1","2","3","4","5","6","7","8","9","0"]
var symbolsArray = ["!","@","#","$","%","^","&","*","(",")","_","+","=","[","]","{","}","?",">","<",".","/"]

// Create a function
function passwordOptions() {
  var promptLenght = parseInt(prompt("Please choose the password length!"));
  if (promptLenght < 8) {
    alert("Your password should be between 8 and 128 characters");
    return;
  }
  if (promptLenght > 128) {
    alert("Your password should be between 8 and 128 characters");
    return;
  }
  if (Number.isNaN(promptLenght)) {
    alert("Password lenght must be a number!");
    return;
  }
  // Confirm if the user want to add lowercase, uppercase, numbers and symbols in the password
  var confirmLowercase = confirm("Do you want to include lowercase alphabet?");
  var confirmUppercase = confirm("Do you want to include Uppercase alphabet?");
  var confirmNumbers = confirm("Do you want to include numbers?");
  var confirmSymbols = confirm("Do you want to include symbols?");

  // Validate the input
  function validate() {
    if (
      confirmLowercase == false &&
      confirmUppercase == false &&
      confirmNumbers == false &&
      confirmSymbols == false
    ) {
      alert("Please choose at least one criteria");
    }
  }
  validate();

  // Creat an object and store user's confirmation of the password criteria
  var options = {
    promptLenght,
    confirmLowercase,
    confirmNumbers,
    confirmSymbols,
    confirmUppercase,
  };
  return options;
}

// Generate random password
function generatePassword() {
  var options = passwordOptions();
  var possible = [];
  var results = [];
  // Use loop to randomly generate lowercase alphabets from users given password length
  if (options.confirmLowercase === true) {
    for (let i = 0; i < options.promptLenght; i++) {
      var randomIndex = Math.floor(Math.random() * lowercaseArray.length);//Gets a random index from lowercaseArray
      var randomEl = lowercaseArray[randomIndex];// Plug the random index to lowercase Array to get random lowercase alphabet
      possible.push(randomEl);
      
    }
  }
  // Use loop to randomly generate uppercase alphabets from users given password length
  if (options.confirmUppercase === true) {
    for (let i = 0; i < options.promptLenght; i++) {
      var randomIndex = Math.floor(Math.random() * uppercaseArray.length);
      var randomEl = uppercaseArray[randomIndex];
      possible.push(randomEl); 
    }
  }
  // Use loop to randomly generate uppercase alphabets from users given password length
  if (options.confirmNumbers === true) {
    for (let i = 0; i < options.promptLenght; i++) {
      var randomIndex = Math.floor(Math.random() * numbersArray.length);
      var randomEl = numbersArray[randomIndex];
      possible.push(randomEl); 
    }
  }
  if (options.confirmSymbols === true) {
    for (let i = 0; i < options.promptLenght; i++) {
      var randomIndex = Math.floor(Math.random() * symbolsArray.length);
      var randomEl = symbolsArray[randomIndex];
      possible.push(randomEl); 
    }
  }

  for (let i = 0; i < options.promptLenght; i++) {
    var randomIndex = Math.floor(Math.random() * possible.length);
      var randomEl = possible[randomIndex];
      results.push(randomEl); 
  }

  return results.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
