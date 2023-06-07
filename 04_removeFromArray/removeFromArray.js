const removeFromArray = function(array, ...args) {
    let arrayToFilter = array
    arrayToFilter = arrayToFilter.filter(item => !args.includes(item))
    return arrayToFilter
}

// Do not edit below this line
module.exports = removeFromArray;
