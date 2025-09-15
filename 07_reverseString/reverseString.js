const reverseString = function(stringToReverse) {
    let newString = '';
    for (let i = length(stringToReverse) - 1; i >= 0; i--) {
        newString += stringToReverse[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
