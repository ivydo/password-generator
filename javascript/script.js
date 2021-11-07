// Push the button to begin
var generateBtn = document.querySelector("#generate");



// Get references to the #generate element

function generatePassword() {
// Empty array to hold all the choices

var resultArray = [];
userArray = [];
  var passwordLength = 0;
  

  // Array for each choice   
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    
   
  // Asks the user to designate length and confirm/reject the choices 

  // var passwordLengthPrompt = prompt ("Choose a password length between 8-128 characters.");
  // var uppercase = confirm ("Click 'OK' to include uppercase letters. 'CANCEL' to exclude uppercase letters.");
  // var lowercase = confirm ("Click 'OK' to include lowercase letters. 'CANCEL' to exclude lowercase letters.");
  // var numbers = confirm ("Click 'OK' to include numbers. 'CANCEL' to exclude numbers.");
  // var special = confirm ("Click 'OK' to include special characters. 'CANCEL' to special characters.");

  passwordLengthPrompt = prompt("Choose a password length between 8-128 characters.");
  uppercase = confirm("Click 'OK' to include uppercase letters. 'CANCEL' to exclude uppercase letters.");
  lowercase = confirm("Click 'OK' to include lowercase letters. 'CANCEL' to exclude lowercase letters.");
  numbers = confirm("Click 'OK' to include numbers. 'CANCEL' to exclude numbers.");
  special = confirm("Click 'OK' to include special characters. 'CANCEL' to special characters.");


  if (parseInt(passwordLengthPrompt) > 7 && parseInt(passwordLengthPrompt) < 128) {
    passwordLength = parseInt(passwordLengthPrompt);
    // Logs the password length
    console.log("The password will have " + passwordLengthPrompt + " characters.");
  } else {
    alert("Count again... You MUST choose a length between 8-128 characters. 🤔");
    generatePassword();
  }
  
  // Asks the user if they want to include uppercase.
  
  if (uppercase) {
    resultArray = resultArray.concat(uppercaseArray);
    console.log("this is uppercase", resultArray);
  }
  
  // Asks the users if they want to include lowercase letters.
  
  if (lowercase) {
    resultArray = resultArray.concat(lowercaseArray);
    console.log("this is lowercase", resultArray);
  }

  // Asks the user if they want to include number.
  
  if (numbers) {
    resultArray = resultArray.concat(numbArray);
    console.log("this is numbers", resultArray);
  }

// Asks the user if they want to include special characters.

  if (special) {
    resultArray = resultArray.concat(specialArray)
    console.log("this is special", resultArray);
  }

// Puts all choices in array and randomizes
    for (i = 0; i < passwordLengthPrompt; i++) {
      userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
    }
    console.log(userArray, "this is password");
  return userArray.join("");
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Copy password to clipboard
function copyPassword() {
  var copyText = document.querySelector("password");
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Event listener to copy password to clip board
generateBtn.addEventListener("click", copyPassword);