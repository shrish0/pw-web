function findMinMax(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Example usage
const numbersArray = [5, 2, 7, 1, 9];
console.log(findMinMax(numbersArray)); // Output: { max: 9, min: 1 }
