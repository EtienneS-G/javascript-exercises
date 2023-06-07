const reverseString = function(string) {
    stringArray = []
    for (let i = 0; i < string.length; i++){
        stringArray.unshift(string.slice(i,i+1))
    }
    return(stringArray.join(''))
};

// Do not edit below this line
module.exports = reverseString;
