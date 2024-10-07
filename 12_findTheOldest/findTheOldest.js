const findTheOldest = function(arr) {
    
    const age = arr.map(person => {
        let deathYear = person.yearOfDeath;
        if (person.yearOfDeath === undefined){
            let currentDate = new Date();
            deathYear = currentDate.getFullYear();
        }
        console.log(deathYear)
        return ({name: `${person.name}`, 
            age: `${deathYear-person.yearOfBirth}`
            })
        
        }
    )
    
    
    const ageArranged = age.sort((a,b) => b.age-a.age)
    console.log(ageArranged)
    return ageArranged[0]
};

// Do not edit below this line
module.exports = findTheOldest;

// const x = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//     //   yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]