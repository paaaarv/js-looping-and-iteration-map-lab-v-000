// Code your solution in this file.

function lowerCaseDrivers(drivers){

  lowerCase = drivers.map(function(driver){
    return Object.assign({}, driver, {name: driver.name.toLowerCase()})})
};
