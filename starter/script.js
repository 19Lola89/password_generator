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

var userInput= [];
var numberOfChar = 0;

// Original code, Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// // Write password to the #password input

function writePassword() {

var validInputs= getPrompts(); // returns true or false 
var passwordText = document.querySelector('#password');

// checking if the condition for pass generation is met 

if (validInputs) {
  var password = generatePassword();
  passwordText.value = password;

} else {
  passwordText.value = ""; 

}
};

  // generating pass based on user input

function generatePassword() {

  var generatePass= "";

  for (i = 0; i < numberOfChar.length; i++) { 

    var random = Math.floor(Math.random() * userInput.length); 
    generatePass= generatePass + userInput[random];

  }
  return generatePass;
}


// Prompt function for the password length


function getPrompts() {
  userInput = [];

  numberOfChar= parseInt(prompt("Please select the number of characters you would like your password to be minimum 10 and maximum of 64", "10")); //NaN

  if(isNaN(numberOfChar)|| numberOfChar < 10|| numberOfChar > 64) {
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