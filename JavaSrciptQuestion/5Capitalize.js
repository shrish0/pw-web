function capitalizeName(name) {
    return name.charAt(0) === name.charAt(0).toLowerCase()
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : name;
}

// Example usage:
console.log(capitalizeName('john'));
console.log(capitalizeName('John'));
