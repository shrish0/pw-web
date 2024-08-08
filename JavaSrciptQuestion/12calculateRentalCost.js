function calculateRentalCost(days, carType) {
    let costPerDay;
    switch (carType) {
        case 'Economy':
            costPerDay = 4000;
            break;
        case 'Midsize':
            costPerDay = 10000;
            break;
        case 'Luxury':
            costPerDay = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }
    return costPerDay * days;
}

// Example usage:
console.log(calculateRentalCost(3, 'Economy'));
console.log(calculateRentalCost(3, 'Midsize'));
console.log(calculateRentalCost(3, 'Luxury'));
console.log(calculateRentalCost(3, 'Sport'));
