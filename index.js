// Code your solution in this file.

function lowerCaseDrivers(drivers){

  return lowerCase = drivers.map(function(driver){
    let newArr = []
    for (const element of drivers){
      newArr.push(element.toLowerCase())
    }
    return newArr);
};
};
