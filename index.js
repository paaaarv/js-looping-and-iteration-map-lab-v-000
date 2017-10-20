// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return lowerCase = drivers.map(function(driver){
    return driver.toLowerCase();
  });
};

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let NewDriver = driver.split(" ")
    return Object.assign({}, {firstName: newDriver[0], lastName: newDriver[1]})
  }

)

}
