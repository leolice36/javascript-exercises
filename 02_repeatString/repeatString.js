const repeatString = function(string,num) {
    let i = 1
    let originalString = string
    if (num == 0){
        return ''
    }
    else if (num < 0){
        return 'ERROR'
    }
    while (i < num){
        string += originalString;
        i++
    }
    return string
};
// let x = repeatString("hey",3)
// console.log(x)

// Do not edit below this line
module.exports = repeatString;
