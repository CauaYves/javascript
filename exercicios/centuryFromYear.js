/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
Example
For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17.
*/

function solution(year) {
    let yearS = year.toString()
    let sec = Number(yearS[0]+yearS[1])
    if(yearS[3] >= 1){
        return sec
    }else if(sec.toString()[2] == 0 && sec.toString()[3] == 0){ 1700
        return sec
    }else{
        return sec
    }

}
console.log(solution(1905)) // 20
console.log(solution(1700)) //17
