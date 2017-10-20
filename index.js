// Code your solution in this file.

function lowerCaseDrivers(drivers){
  const newArr = [];
  return lowerCase = drivers.map(function(driver){
    for (const element of drivers){
      newArr.push(element.toLowerCase());
    };
    return newArr)

  };
};
