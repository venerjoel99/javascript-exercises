const isValid = function(num) {
    return typeof(num) === 'number' && num >= 0 && Math.floor(num) == num;
}

const sumAll = function(firstNum, secondNum) {
    if (!isValid(firstNum) || !isValid(secondNum)) {
        return "ERROR"
    }
    const start = Math.min(firstNum, secondNum);
    const finish = Math.max(firstNum, secondNum);
    let resultingSum = 0;
    for (let currentNum = start; currentNum <= finish; currentNum++) {
        resultingSum += currentNum;
    }
    return resultingSum;
};

// Do not edit below this line
module.exports = sumAll;
