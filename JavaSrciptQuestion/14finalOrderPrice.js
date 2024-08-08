const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
}

// Example usage:
console.log(calculateTotalCost([{ unitPrice: 100, quantity: 2 }, { unitPrice: 200, quantity: 1 }]));
