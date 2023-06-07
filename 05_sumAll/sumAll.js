const sumAll = function(num1, num2) {
if (num1<0 || num2 <0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
    return 'ERROR'
} else {
let bigNumber = Math.max(num1,num2)
let smallNumber = Math.min(num1,num2)
let i = smallNumber
        let runningTotal = 0
        while (i<=bigNumber){
            runningTotal += i
            i++
        }
        return runningTotal
}
}


// Do not edit below this line
module.exports = sumAll;
