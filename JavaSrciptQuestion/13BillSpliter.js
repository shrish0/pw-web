function calculateBill(costs, people) {
    const totalBill = costs.reduce((sum, cost) => sum + cost, 0);
    return {
        totalBill: totalBill,
        billPerPerson: totalBill / people
    };
}

// Example usage:
console.log(calculateBill([100, 200, 300], 3));
