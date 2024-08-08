const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

const validateURL = (url) => {
    if (urlRegex.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
};

// Example usage
validateURL("https://example.com");
validateURL("ftp://example.com");
