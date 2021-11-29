// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var numbers = "0123456789";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()";
  var symbols = ''

  var pwLength = window.prompt ("How long do you want your password?");
  var upperCase = window.confirm ("Would you like to include uppercase letters?");
  var lowerCase = window.confirm ("Would you like to include lower case letters?");
  var numeric = window.confirm ("Would you like to include numbers?");
  var special = window.confirm ("Would you like to include special characters?");
  var password = "";

  if (upperCase == true) {
    symbols += uppercaseLetters;
  }

  if (lowerCase == true) {
    symbols += lowercaseLetters;
  }

  if (numeric == true) {
    symbols += numbers;
  }

  if (special == true) {
    symbols += specialChars;
  }



  for (var i = 0; i < Number(pwLength); i++){
    var randomize = Math.floor(Math.random() * symbols.length);
    password += symbols.substring(randomize, randomize +1);
    
  }
  
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

