const returnFirstTwoDrivers = function (ray) {
    return ray.slice(0,2);
}

const returnLastTwoDrivers = function (ray) {
    return ray.slice(-2, ray.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare){
        return (fare * int);
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers);
}