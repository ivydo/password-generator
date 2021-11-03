// Assignment code here

// Get references to the #generate element

function generatePassword() {

  // Array for each choice   
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    
  // Empty array to hold all the choices

  var resultArray = [];
  var passwordLength
  
  // Asks the user to designate length and confirm/reject the conditions 

  // var passwordLengthPrompt = prompt ("Choose a password length between 8-128 characters.");
  // var uppercase = confirm ("Click 'OK' to include uppercase letters. 'CANCEL' to exclude uppercase letters.");
  // var lowercase = confirm ("Click 'OK' to include lowercase letters. 'CANCEL' to exclude lowercase letters.");
  // var numbers = confirm ("Click 'OK' to include numbers. 'CANCEL' to exclude numbers.");
  // var special = confirm ("Click 'OK' to include special characters. 'CANCEL' to special characters.");

  passwordLengthPrompt = prompt("Choose a password length between 8-128 characters.");
  if (parseInt(passwordLengthPrompt) > 7 && parseInt(passwordLengthPrompt) < 128) {
    passwordLengthPrompt = parseInt(passwordLengthPrompt);
    // Logs the password length
    console.log("The password will have " + passwordLengthPrompt + " characters.");
  } else {
    alert("Count again... You MUST choose a length between 8-128 characters. 🤔");
    generatePassword();
  }
  
  // Asks the user if they want to include uppercase.
  uppercase = confirm("Click 'OK' to include uppercase letters. 'CANCEL' to exclude uppercase letters.");
  if (uppercase) {
    resultArray = resultArray.concat(uppercaseArray);
  }
  
  // Asks the users if they want to include lowercase letters.
  lowercase = confirm("Click 'OK' to include lowercase letters. 'CANCEL' to exclude lowercase letters.");
  if (lowercase) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  // Asks the user if they want to include number.
  numbers = confirm("Click 'OK' to include numbers. 'CANCEL' to exclude numbers.");
  if (numbers) {
    resultArray = resultArray.concat(numbArray);
  }



}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);