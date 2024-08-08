function greet(name) {
    return new Promise((resolve) => {
        resolve(`Hello, ${name}!`);
    });
}

// Example usage
greet('Mithun').then(message => console.log(message)); // Output: Hello, Mithun!
