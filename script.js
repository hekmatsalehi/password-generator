// Define generatePassword function
// Prompt the user to choose password criteria
// Length of Password (between 8 and 128 characters)
// Confirm for Lowercase, uppercase, numeric and symbols
// Validate the input. At least one character type should be selected
// Generate the password
// Display the password in an alert or on the page.



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Create a function
function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "01234567890"
  var symbols = "!@#$%^&*()_+=[]{}\?><,./"

  var promptLenght = prompt("Please choose the password length!");
  if(promptLenght < 8){
    alert("Your password should be between 8 and 128 characters");
  }
  if(promptLenght > 128){
    alert("Your password should be between 8 and 128 characters");
  }
  var confirmLowercase = confirm("Do you want to include lowercase alphabet?");
  var confirmUppercase = confirm("Do you want to include lowercase alphabet?");
  var confirmNumbers = confirm("Do you want to include numbers?");
  var confirmSymbols = confirm("Do you want to include Symbols?");




  return; 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
