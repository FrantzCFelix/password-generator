var passwordLength;
var passwordCriteria;
var passwordCriteriaArr = [];
var passwordCriteriaBoolSpecial = false;
var passwordCriteriaBoolNumerical = false;
var passwordCriteriaBoolLower = false;
var passwordCriteriaBoolUpper = false;


while (passwordLength !== null) {

    passwordLength = prompt("Password Length is between 8-128 Characters");
    passwordLength = parseInt(passwordLength);

    // make sure to exit loop if user hits cancel

    if (isNaN(passwordLength)) {
        alert("Please enter a valid Number");
    }

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128");
    }

    if (passwordLength >= 8 && passwordLength <= 128) {
        break;
    }

}

while (passwordCriteria !== null) {

    passwordCriteria = prompt("Password Criteria: s for special characters, n for Numeric characters, l for lowercase characters, u for uppercase characters");

    if (passwordCriteria !== null) {
        passwordCriteriaArr = passwordCriteria.split("");
    }

    for (var i = 0; i < passwordCriteriaArr.length; i++) {
        if (passwordCriteriaArr[i].includes('s')) {
            passwordCriteriaBoolSpecial = true;
        }
        if (passwordCriteriaArr[i].includes('n')) {
            passwordCriteriaBoolNumerical = true;
        }
        if (passwordCriteriaArr[i].includes('l')) {
            passwordCriteriaBoolLower = true;
        }
        if (passwordCriteriaArr[i].includes('u')) {
            passwordCriteriaBoolUpper = true;
        }

    }

    if (passwordCriteriaBoolSpecial === true ||
        passwordCriteriaBoolNumerical === true ||
        passwordCriteriaBoolLower === true ||
        passwordCriteriaBoolUpper === true) {
        break;
    }
    else {
        alert("Enter a valid input");
    }


}

generatePassword(passwordLength, passwordCriteriaBoolSpecial, passwordCriteriaBoolNumerical, passwordCriteriaBoolLower, passwordCriteriaBoolUpper);

function generatePassword(length, specialCharBool, numericalCharBool, lowerCharBool, upperCharBool) {
    var passwordArr = [];
    var passwordString;
    var availableCharSetArr = [];
    var availableCharSetString;
    var specialCharSet = [' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~'];
    var numericalCharSet = ['1234567890'];
    var lowerCharSet = ['abcdefghijklmnopqrstuvwyxz'];
    var upperCharSet = ['ABCDEFGHIJKLMNOPQRSTUVWYXZ'];

    if (specialCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(specialCharSet);
    }
    if (numericalCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(numericalCharSet);
    }
    if (lowerCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(lowerCharSet);
    }
    if (upperCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(upperCharSet);
    }
    
    availableCharSetArr = availableCharSetArr.join('');
    availableCharSetString = availableCharSetArr.toString();
   
   

   for(var i = 0; i < length; i++)
   {
    var randomNum = Math.floor((Math.random() * availableCharSetArr.length) + 1)
      
    passwordArr.push(availableCharSetString.charAt(randomNum));
    // passwordArr = availableCharSetArr[0].charAt(randomNum);
   }
   passwordArr = passwordArr.join("");
   passwordString = passwordArr.toString(); 
   console.log(passwordString);

   alert("Your password is " + passwordString);

  // console.log(availableCharSetArr);
  // console.log(availableCharSetArr.length);




}



