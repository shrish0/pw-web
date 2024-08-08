function countOccurrences(text) {
    const words = text.split(/\s+/); // Split the text by whitespace
    const wordCountMap = new Map();

    words.forEach(word => {
        word = word.toLowerCase();
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });

    return wordCountMap;
}

// Example usage
const text = "This is a test. This test is only a test.";
console.log(countOccurrences(text));
