// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple) {
  return function (fare) {
    return fare * multiple;
  };
}

const fareDoubler = (fare) => {
  const doubler = createFareMultiplier(2);
  return doubler(fare);
};

const fareTripler = (price) => {
  const tripler = createFareMultiplier(3);
  return tripler(price);
};

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
