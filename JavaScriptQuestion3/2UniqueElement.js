function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
const numbers = [1, 2, 3, 2, 4, 5, 1];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
