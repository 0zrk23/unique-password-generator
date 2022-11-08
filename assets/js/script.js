// Assignment Code
var generateBtn = document.querySelector("#generate");
// var password = "test-password";
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_!@#$%^&*()'
var charSeparator = [];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = generatePassword();
  document.querySelector("#password").value = generatePassword();
}

function generatePassword(){
  //calls function to ask the password length;
  var passLength = askPassLength();

  
  //as user to confirm the type of symbols they want in their password
  var hasLower = window.confirm("Do you want lowercase letters in your password?\nClick cancel for no");
  var hasUpper = window.confirm("Do you want uppercase letters in your password?\nClick cancel for no");
  var hasNum = window.confirm("Do you want numbers in your password?\nClick cancel for no");
  var hasSymbols = window.confirm("Do you want symbols in your password\nClick cancel for no");
  //if no symbol type was selected, alert user that they need to select at least 1 type of symbol
  while(!hasLower && !hasNum && !hasSymbols && !hasUpper){
    window.alert("You must select at least one symbol type");
    hasLower = window.confirm("Do you want lowercase letters in your password?\nClick cancel for no");
    hasUpper = window.confirm("Do you want uppercase letters in your password?\nClick cancel for no");
    hasNum = window.confirm("Do you want numbers in your password?\nClick cancel for no");
    hasSymbols = window.confirm("Do you want symbols in your password\nClick cancel for no");
  }
}

//function for asking user password length
function askPassLength(){
  var havePassLength = false;
  while(!havePassLength){
    //prompt user for password length
    var passLength = prompt("Please enter desired password length\nMinimum is 8\nMaximum is 128");
    //if the entered password is not within parameters, prompt user again
    while(!passLength || isNaN(passLength) || passLength < 8 || passwLength > 128){
      passLength = prompt("Length was not recognized\nPlease enter desired password length between 8-128");
    }
    //prompt user if they are happy with the selected length
    if(window.confirm("You have selected a password length of " + passLength + " characters\nSelect yes to continue, cancel to choose a different length.")){
      havePassLength = true;
    }
  }
  return passLength;
}

//function for generating desired character
function generateChar(charType){
  var symbols = '_!@#$%^&*()';
  //if there is no input for the function, generate from random number
  if (typeof charType == "undefined"){
    return chars[Math.floor(Math.random()*chars.length)];
  }
  //if charType = 0 it generates a random number
  if (charType === 0){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
  }
  //if charType = 1, it generates a random uppercase letter
  if (charType === 1){
    return String.fromCharCode(Math.floor(Math.random()*24) + 65);
  }
  //if charType = 2, it generates a random lowercase letter
  if(charType === 2){
    return String.fromCharCode(Math.floor(Math.round()*24 + 97));
  }
  //if charType = 3, it generates a random symbol
  if(charType === 3){
    return symbols[Math.floor(Math.random()*symbols.length)];
  }
}