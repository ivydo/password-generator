// Assignment code here

// Get references to the #generate element

function generatePassword() {

  // Array for each condition  
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    
// Empty array

  var resultArray = [];
  var userArray = [];
  
// Asks the user to confirm the conditions 

  var passwordLength = prompt ("Choose a password length between 8-128 characters.");
  var uppercase = confirm ("Click 'OK' to include uppercase letters. 'CANCEL' to exclude uppercase letters.");
  var lowercase = confirm ("Click 'OK' to include lowercase letters. 'CANCEL' to exclude lowercase letters.");
  var numbers = confirm ("Click 'OK' to include numbers. 'CANCEL' to exclude numbers.");
  var special = confirm ("Click 'OK' to include special characters. 'CANCEL' to special characters.");


  
}

var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);