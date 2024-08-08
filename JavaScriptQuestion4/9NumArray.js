function numberChecker(arr) {
    return function(num) {
        return arr.includes(num);
    }
}

// Example usage
const checkNumbers = numberChecker([1, 2, 3, 4, 5]);
console.log(checkNumbers(3)); // true
console.log(checkNumbers(6)); // false
