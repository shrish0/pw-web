function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log(extractElements(array)); // Output: [1, 2, 5]
