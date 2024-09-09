const removeFromArray = function(arrayInput, ...elementsToRemove) {
        
        return arrayInput.filter(num => !elementsToRemove.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
