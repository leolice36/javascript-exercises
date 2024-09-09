const sumAll = function(firstNum,secondNum) {
    
    if (
        (firstNum<0)||(secondNum<0)||(!Number.isInteger(firstNum))||
        !Number.isInteger(firstNum)||!Number.isInteger(secondNum)||
        Number.isNaN(firstNum)||Number.isNaN(secondNum)){
        return 'ERROR'
    }
    else if (firstNum > secondNum){
        smallerNum = secondNum
        largerNum = firstNum
    }
    else{
        smallerNum = firstNum
        largerNum = secondNum
    }
    let total = 0
    for (let i = smallerNum; i <= largerNum; i++)
        total += + i;
    return total
};

// Do not edit below this line
module.exports = sumAll;
