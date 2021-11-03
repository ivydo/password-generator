// Assignment code here
function generatePassword() {
  // Designate password length
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var numbers = "0123456789";
    
  var options = [alpha, caps, numeric, special];

    window.prompt("Choose your password length (8 min., 128 max.):")
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








