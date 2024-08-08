function getPerson(obj) {
    try {
        if (typeof obj !== 'object' || obj === null || !('name' in obj) || !('age' in obj)) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${obj.name}, Age: ${obj.age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage
console.log(getPerson({ name: "John", age: 30 })); // "Name: John, Age: 30"
console.log(getPerson({ name: "John" })); // "Invalid parameter type"
console.log(getPerson("invalid")); // "Invalid parameter type"
