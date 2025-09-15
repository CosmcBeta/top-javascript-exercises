const removeFromArray = function(array, ...numsToRemove) {
    return array.filter(inArray);

    function inArray(number) {
        return !numsToRemove.includes(number);
    }
};

// Do not edit below this line
module.exports = removeFromArray;
