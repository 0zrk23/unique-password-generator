// Assignment Code
document.querySelector("#lowercase").setAttribute("checked","true");
var generateBtn = document.querySelector("#generate");
var chars = {
  nums: '1234567890',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  symbols: '_!@#$%^&*()',
}
var user = {
  passLength: 0,
  selected: '',
  charTypes: [],
  password: '',
  //function for shuffling character types array
  shuffleCharTypes: function(){
    for (var i = user.charTypes.length -1; i > 0; i--){
      var j = Math.floor(Math.random()*(i+1));
      [user.charTypes[i],user.charTypes[j]]=[user.charTypes[j],user.charTypes[i]];
    }
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // //call function to ask the user for password length
  // askPassLength();
  // //call function to ask the user for password symbols
  // askCharType();
  // //call function to generate password
  generatePassword();
  //display password
  document.querySelector("#password").value = user.password;
}

function generatePassword(){
  user.password = '';
  user.selected = '';
  user.charTypes = [];
  user.passLength = document.querySelector("#password-length").value;
  //check if the user has enterd the password length
  if(!user.passLength || user.passLength < 8 || user.passLength > 128){
    window.alert("Password length not recongnized\nPlease enter a number between 8 - 128")
    return;
  }
  var hasLower = document.querySelector('#lowercase').checked;
  var hasUpper = document.querySelector('#uppercase').checked;
  var hasNum = document.querySelector('#numbers').checked;
  var hasSym = document.querySelector('#symbols').checked;
  //check if the user has at least one type of character type
  if(!hasLower && !hasUpper && !hasNum && !hasSym){
    window.alert("You must have at least one type of symbol checked")
    return;
  }
  if(hasSym){
    user.selected += chars.symbols;
    user.charTypes.splice(0,0,0);
  }
  if(hasLower){
    user.selected += chars.lower;
    user.charTypes.splice(0,0,1);
  }
  if(hasNum){
    user.selected += chars.nums;
    user.charTypes.splice(0,0,2);
  }
  if(hasUpper){
    user.selected += chars.upper;
    user.charTypes.splice(0,0,3);
  }
  user.shuffleCharTypes();
  //generate random password
  for(charIndex=0;charIndex < user.passLength;charIndex++){
    user.password += generateChar(user.charTypes[charIndex])
  }
  return;
}

// //function for asking user password length
// function askPassLength(){
//   while(true){
//     //prompt user for password length
//     user.passLength = prompt("Please enter desired password length\nMinimum is 8\nMaximum is 128");
//     //if the entered password is not within parameters, prompt user again
//     while(!user.passLength || isNaN(user.passLength) || user.passLength < 8 || user.passLength > 128){
//       user.passLength = prompt("Length was not recognized\nPlease enter desired password length between 8-128");
//     }
//     //prompt user if they are happy with the selected length
//     if(window.confirm("You have selected a password length of " + user.passLength + " characters\nSelect yes to continue\nSelect cancel to choose a different length.")){
//       return;
//     }
//   }
// }

// //function for asking user for password
// function askCharType(){
//   while(true){
//     var hasNums = false;
//     var hasLower = false;
//     var hasUpper = false;
//     var hasSymbols = false;
//     user.selected = '';
//     user.charTypes = [];
//     //ask user if they want numbers in their password
//     if(window.confirm("Do you want numbers included in your password?\nClick cancel for no")){
//       hasNums = true;
//       user.selected += chars.nums;
//       user.charTypes.splice(0,0,"number");
//     }
//     //ask user if they want uppercase letters in their password
//     if(window.confirm("Do you want uppercase letters in your password?\nClick cancel for no")){
//       hasUpper = true;
//       user.selected += chars.upper;
//       user.charTypes.splice(1,0,"uppercase");
//     }
//     //ask user if they want lowercase letters in their password
//     if(window.confirm("Do you want lowercase letters in your password?\nClick cancel for no")){
//       hasLower = true;
//       user.selected += chars.lower;
//       user.charTypes.splice(2,0,"lowercase");
//     }
//     //ask user if they want symbols in their password
//     if(window.confirm("Do you want symbols in your password?\nClick cancel for no")){
//       hasSymbols = true;
//       user.selected += chars.symbols;
//       user.charTypes.splice(3,0,"symbol");
//     }
//     //check to see if any symbols were selected
//     if(typeof user.charTypes !== "undefined"){
//       if(window.confirm("You have selected: " + user.charTypes.concat() + " character types\nClick yes to continue\nClick cancel to select again.")){
//         return;
//       }
//     } 
//   }
// }

//function for generating desired character
function generateChar(charType){
  //if there is no input for the function, generate from random number
  if (typeof charType === "undefined"){
    return user.selected[Math.floor(Math.random()*user.selected.length)];
  }
  //if charType = 0, it generates a random symbol
  if(charType === 0){
    return chars.symbols[Math.floor(Math.random()*chars.symbols.length)];
  }
  //if charType = 1, it generates a random uppercase letter
  if (charType === 1){
    return chars.lower[Math.floor(Math.random()*chars.lower.length)];
  }
  //if charType = 2 it generates a random number
  if (charType === 2){
    return chars.nums[Math.floor(Math.random()*chars.nums.length)];
  }
  //if charType = 3, it generates a random lowercase letter
  if(charType === 3){
    return chars.upper[Math.floor(Math.random()*chars.upper.length)];
  }
  
}