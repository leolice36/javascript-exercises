const palindromes = function (inputText) {
    let alphaText = inputText
        .replace(/[^a-zA-Z0-9]/g,'')
        .toLowerCase();

    console.log({alphaText})
    let arr = alphaText.split('')
    let arrRev = [...arr].reverse()
    
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] != arrRev[i])
            return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
// let inputText = "asdfasdfas";
// let arr = inputText.split('')
//     console.log(arr)