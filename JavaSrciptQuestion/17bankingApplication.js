let customer = {
    name: 'John Doe',
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        this.balance -= amount;
    }
};

// Example usage:
customer.deposit(500);
console.log(customer.balance); // 1500
customer.withdraw(200);
console.log(customer.balance); // 1300
