function extractPersonInfo(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

// Example usage
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Somewhere",
        country: "USA"
    }
};

console.log(extractPersonInfo(person)); // Output: { name: 'John Doe', street: '123 Main St' }
