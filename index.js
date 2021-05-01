// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers)
{
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers)
{
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int)
{
    return function(fare)
    {
        const price = int * fare
        return price
    }
}

function fareDoubler(int)
{
    const fare = int * 2
    return fare
}

function fareTripler(int)
{
    const fare = int * 3
    return fare
}

function selectDifferentDrivers(arrayOfDrivers, random)
{
    return random(arrayOfDrivers)
}