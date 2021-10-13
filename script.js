// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  console.log("This will generate a password.");
  // ask the user how many characters

  return "somePassWord";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
