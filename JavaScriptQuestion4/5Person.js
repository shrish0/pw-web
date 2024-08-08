class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Example usage
const person1 = new Person("John", 25);
console.log(person1.getDetails()); // "Name: John, Age: 25"

const person2 = new Person();
console.log(person2.getDetails()); // "Name: Unknown, Age: 0"
