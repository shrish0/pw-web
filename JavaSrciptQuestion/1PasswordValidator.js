function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

// Example usage:
validatePassword("mypassword", "mypassword");
validatePassword("mypassword", "wrongpassword");
