const palindromes = function () {
    const filteredInput = arguments[0].toLowerCase().split("").filter(char => {
        return ('a' <= char && char <= 'z') || ('0' <= char && char <= '9');
    }).join("");
    const reversedString = filteredInput.split("").reverse().join("");
    return filteredInput === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
