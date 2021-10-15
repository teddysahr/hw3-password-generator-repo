// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  emptyArray.splice(0, emptyArray.length);

  passwordText.value = password;
}

//Establishing 4 Arrays to choose from and combine into the pool
var upperCaseString = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCaseString.split(" ");

var lowerCaseString = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCaseString.split(" ");

var numericValuesString = "0 1 2 3 4 5 6 7 8 9";
var numericValuesArray = numericValuesString.split(" ");

var specialCharactersString = "! @ # $ % ^ & * ( )";
var specialCharactersArray = specialCharactersString.split(" ");

//Establishing an empty array as the "pool"
var emptyArray = [];

//Establishing a function to select a random character from the pool array
function getRandomCharacter(array) {
  var randomItem = array[Math.floor(Math.random() * array.length)];
  console.log(randomItem);

  return randomItem;
}

//establish a function to produce the correct array

function includedCharacters() {
  var includeUpperCase = confirm("Include Upper-Case?");

  if (includeUpperCase) {
    emptyArray.push(...upperCaseArray);
  } else {
    console.log("not added");
  }

  var includeLowerCase = confirm("Include Lower-Case?");

  if (includeLowerCase) {
    emptyArray.push(...lowerCaseArray);
  } else {
    console.log("not added");
  }

  var icludeNumericValues = confirm("Include Numeric Values?");

  if (icludeNumericValues) {
    emptyArray.push(...numericValuesArray);
  } else {
    console.log("not added");
  }

  var includeSpecialCharacters = confirm("Include Special Characters?");

  if (includeSpecialCharacters) {
    emptyArray.push(...specialCharactersArray);
  } else {
    console.log("not added");
  }

  var completedMessage = confirm("thanks, click ok to generate password");

  if (completedMessage) {
    getRandomCharacter(emptyArray);
  } else {
    console.log("done");
  }
  console.log("pool array", emptyArray);

  return emptyArray;
}

//click
function generatePassword() {
  console.log("This will generate a password.");
  // ask the user how many characters
  var numberOfCharacters = prompt(
    "How man characters would you like your password to be?",
    "Minimum-8 Maximum-128"
  );
  //validate number of characters
  if (
    parseInt(numberOfCharacters) >= 8 &&
    parseInt(numberOfCharacters) <= 128
  ) {
    console.log("valid number of characters selected");
    var emptyArray = includedCharacters();
  } else {
    alert("please choose valid number of characters");
  }

  var passwordArray = [];

  function iteratingLoop() {
    for (var i = 0; i < parseInt(numberOfCharacters); i++) {
      results = getRandomCharacter(emptyArray);
      passwordArray.push(results);
    }
    return passwordArray;
  }

  console.log(passwordArray);

  var loop = iteratingLoop();

  var final = loop.join("");

  return final;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
