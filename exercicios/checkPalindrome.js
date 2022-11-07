/*
Given the string, check if it is a palindrome.
Example:
For inputString = "aabaa", the output should be
solution(inputString) = true;
*/

function solution(inputString) {
let valap = ""

for(let i = inputString.length - 1; i >= 0; i--){
    valap += inputString[i]
}

if (valap == inputString){
    return "sim"
}else{
    return "não"
}

} 
console.log(solution("aba"))