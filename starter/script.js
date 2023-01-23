// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var charLength = 7;
var userInput = [];

// Query selectors

var generateBtn = document.querySelector("#generate");

// add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Write password to #password input

function writePassword() { 

  var correctPrompts= getPrompts(); // true or false
  var passwordText = document.querySelector("#password"); 

  if(correctPrompts) {

    var newPassword = generatePassword();

    passwordText.value = newPassword;

  } else {
    passwordText.value = "Sorry buddy, enter correct values for me to generate the password :) "
  }
   
}

function generatePassword() { 
  // generating password from pormpts

  var password = "";
  for(var i= 0; i < charLength; i++) {
    var random = Math.floor(Math.random() * userInput.length); 
    password = password + userInput[random]; 

  }
  return password; 

}
function getPrompts() {
 
//getting the answers from the user
  userInput = [];
  charLength= parseInt(prompt("Please select the number of characters you would like your password to be minimum 10 and maximum of 64")); //NaN

    if(isNaN(charLength)|| charLength < 10|| charLength > 64) {
      alert ("Please enter a valid number");
      return false; 
    }

    if(confirm("Would you like lowercase characters in your password?")) {
          userInput = userInput.concat(lowerCasedCharacters);
        } 
        if(confirm("Would you like upperrcase characters in your password?")) {
          userInput = userInput.concat(upperCasedCharacters);
        }
        if(confirm("Would you like numeric characters in your password?")) {
          userInput = userInput.concat(numericCharacters);
        }
        if(confirm("Would you like special characters in your password?")) {
          userInput = userInput.concat(specialCharacters);

        } 
        return true;

    
}
      



