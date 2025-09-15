const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') { // Detects if values are numbers
        return 'ERROR';
    } else if (firstNum < 0 || secondNum < 0) { // Detects if negative
        return 'ERROR';
    } else if (firstNum % 1 !== 0 || secondNum % 1 !== 0) { // Detects if not an integer
        return 'ERROR';
    } else if (firstNum > secondNum) {
        startVal = secondNum;
        endVal = firstNum;
    } else {
        startVal = firstNum;
        endVal = secondNum;
    }

    let sum = 0;
    for (let i = startVal; i <= endVal; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
