// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// created variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

// characters that can be included
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var toUpper = function (x) {
  return x.toUpperCase();
};
alphabet2 = alphabet.map(toUpper);

// function to generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
} if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));
} else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // statements to determine choices
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
} 
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alphabet, alphabet2);
}
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alphabet2);
}
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alphabet);
}
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alphabet, alphabet2);
}
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alphabet, alphabet2);
}
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);
}