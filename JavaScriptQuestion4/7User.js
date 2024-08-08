class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return '*'.repeat(this._password.length); // Mask password
    }

    set password(newPassword) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (passwordRegex.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.log("Error: Password must be at least 8 characters long and include at least one number and one uppercase letter.");
        }
    }
}

// Example usage
const user = new User("Alice", "Password1");
console.log(user.password); // "**********"
user.password = "NewPass1";
console.log(user.password); // "**********"
user.password = "short";
