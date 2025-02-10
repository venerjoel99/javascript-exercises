const removeFromArray = function() {
    if (arguments.length == 0) {
        return [];
    }
    if (arguments.length == 1) {
        return arguments[0];
    }
    let inputArray = arguments[0];
    let itemsToRemove = Array.from(arguments);
    itemsToRemove.shift();
    let resultArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        const currentItem = inputArray[i];
        const argItemIndex = itemsToRemove.indexOf(currentItem);
        if (argItemIndex < 0) {
            resultArray.push(currentItem);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
removeFromArray([1,2,3], 3)