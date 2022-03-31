// Code your solution here
function findMatching(array, string) {
    const drivers = array.filter(checkName);
        function checkName(name) {
            if (name.toUpperCase() === string.toUpperCase()) {
                return name;
            }
        }
    return drivers;
}

function fuzzyMatch(array, string) {
    const drivers = array.filter(checkName);
        function checkName(name) {
            const firstNameLetter1 = name.charAt(0);
            const firstNameLetter2 = string.charAt(0);
            if (firstNameLetter1 === firstNameLetter2) {
                return name;
            }
        }
    return drivers;
}

function matchName(objects, string) {
    const drivers = objects.filter(checkDriver);
        function checkDriver(driver) {            
            if (driver.name === string) {
                return driver;
            }
        }
    return drivers;
}