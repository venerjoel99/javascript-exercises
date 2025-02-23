const findTheOldest = function() {
    const inputArray = arguments[0];
    return inputArray.reduce((first, second) => {
        const currentYear = (new Date()).getFullYear();
        const firstDeathYear = first.yearOfDeath === undefined ? currentYear : first.yearOfDeath;
        const secondDeathYear = second.yearOfDeath === undefined ? currentYear : second.yearOfDeath;
        const firstAge  = firstDeathYear - first.yearOfBirth;
        const secondAge = secondDeathYear - second.yearOfBirth;
        return firstAge > secondAge ? first : second;
    }, inputArray[0].name);
};

// Do not edit below this line
module.exports = findTheOldest;
