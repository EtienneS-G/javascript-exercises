const repeatString = function(string,num) {
    let stringToRepeat = string
    if (num>0){
        for (let i = 1; i < num; i++){
        
            stringToRepeat+=string
        }
        return(stringToRepeat)
    } 
    else if (num == 0) {
        return('')
    }
    else if (num < 0) {
        return('ERROR')
    }

};



// Do not edit below this line
module.exports = repeatString;
