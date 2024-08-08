function printInvertedTriangle(i) {
    line="*".repeat(i)
    for (let row = i; row > 0; row--) {
        console.log(line);
        line = line.substr(0, row - 1);
    }
}

// Example usage:
printInvertedTriangle(6);
