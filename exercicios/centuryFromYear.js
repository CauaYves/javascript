/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
Example
For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17.
*/

function solution(year) {
    let ano = 0

    if(year.toString()[2] == 0 && year.toString()[3] == 0){
        return year / 100
    }else if(year.toString().length == 3 && year.toString()[2] == 0 && year.toString()[1] == 0){
        return year / 100
    }else if(year.toString().length == 3){
        ano = year / 100 
        return parseInt(ano, 0) + 1
    }else if(year.toString()[3] != 0){
        ano = year / 100
        return parseInt(ano, 0) + 1
    }

} 
console.log(solution(200)) // 2
