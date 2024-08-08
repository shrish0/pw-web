function manipulateString(str) {
    const manipulatedString = str.toUpperCase();
    
    function logString() {
        console.log(`The manipulated string is: ${manipulatedString}`);
    }
    
    return logString;
}

// Example usage
const log = manipulateString('hello world');
log(); // Output: The manipulated string is: HELLO WORLD
