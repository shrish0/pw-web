function reverseStringWithDelay(input) {
    setTimeout(() => {
        const reversedString = input.split('').reverse().join('');
        console.log(reversedString);
    }, 2000);
}

// Example usage
const input = "Hello, World!";
reverseStringWithDelay(input);
