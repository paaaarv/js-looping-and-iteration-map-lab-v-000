// Code your solution in this file.

function lowerCaseDrivers(drivers){

  return lowerCase = drivers.map(function(driver){
    return Object.assign({}, driver, {name: driver.name.toLowerCase()})})
};
