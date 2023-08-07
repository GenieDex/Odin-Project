let userInput = prompt("Enter a String to see if it's a palindrome.");

function palindrome(str) {
    let splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function checkPalindrome(palindromeResult, userInput) { 
    let result;
    if (palindromeResult === userInput) {
        result = "You entered a palindrome";
    } else {
        result = "You did not enter a palindrome";
    }
    return result;
}

let reversedInput = palindrome(userInput);
let result = checkPalindrome(reversedInput, userInput);
alert(result);
