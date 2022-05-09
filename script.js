// Assignment Code
var generateBtn = document.querySelector("#generate");
//created constant variable called LowercaseAlphabet to store the alphabets using split method
const LowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//created constant variable called UppercaseAlphabet to store the "UpperCase Letters" alphabets using split method
const UppercaseAlphabet = "abcdefgijklmnopqrstuvwxyz".toUpperCase().split("");
//created variable called Numeric and made an array of number from 0 to 9
var Numeric = [0,1,2,3,4,5,6,7,8,9] 
//created variable called special characters and store them in an array
var special = ["!","@","#","$","%","^","&","*","(",")"]
//we print the following constants and variables on console
console.log(LowercaseAlphabet, UppercaseAlphabet, Numeric, special);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;

}
//create a function
function generatePassword() {
  
   var passwordLength = window.prompt("What is the length of your password?");
  
  
//write an if statment that check whether the length of the password is between 0 and 128 characters.
   if (passwordLength < 8 || passwordLength > 128) {
     window.alert("Please try again!");
     return;
   }
   var possibleSelection = [];
   var lowercaseAnswer = window.confirm("Do you want Lowercase?");
  //write a boolean statement to check whether the statement is true or not
   if (lowercaseAnswer === true) {
     possibleSelection = possibleSelection.concat(LowercaseAlphabet)
   }
   var UppercaseAnswer = window.confirm("Do you want Uppercase?");
  
   if (UppercaseAnswer === true) {
    possibleSelection = possibleSelection.concat(UppercaseAlphabet)
  }
   //For every variable we ask user for confirmation
   var NumericAnswer = window.confirm("Do you want Numeric?");
    // if yes then we combine them that gives a numeric value.
   if (NumericAnswer === true) {
    possibleSelection = possibleSelection.concat(Numeric)
  }

   var SpecialCharacters = window.confirm("Do you want Special Characters?");
  //  console.log (SpecialCharacters);
   if (SpecialCharacters === true) {
    possibleSelection = possibleSelection.concat(special)
  }
  console.log(possibleSelection);
  //Math.random() * possibleSelection.length
  //write a for loop so randomely the characters are printing until it reaches the password length
 for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random()* possibleSelection.length);
  console.log(possibleSelection[index])
  // create another for loop so we can put the pasword on the same line 
  var result = possibleSelection[index];
  for (var i = 1; i < passwordLength; i+=1) {
    result = result + i;
  }
  //alert to show the user his/her generated password
  alert("Your passowrd is " + result);
  console.log(result);
 }
 

  
}
 

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
