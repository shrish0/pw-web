const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(2);
}

// Example usage:
console.log(calculateDiscountPercentage(1000, 800));
