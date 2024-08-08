const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

const validateLinkedInURL = (url) => {
    if (linkedinRegex.test(url)) {
        console.log("Valid LinkedIn Profile URL");
    } else {
        console.log("Invalid LinkedIn Profile URL");
    }
};

// Example usage
validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInURL("https://www.linkedin.com/in/john_doe-12345");
validateLinkedInURL("https://www.linkedin.com/in/abc");
