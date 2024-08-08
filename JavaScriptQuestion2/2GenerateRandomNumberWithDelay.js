function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay;

    const intervalId = setInterval(() => {
        console.log(`Time remaining: ${remainingTime} seconds`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(intervalId);
            const randomNumber = Math.floor(Math.random() * 100);
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}

// Example usage
generateRandomNumberWithDelay(3);
