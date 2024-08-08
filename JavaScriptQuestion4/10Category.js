function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    }
}

// Example usage
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Smartphone", category: "Electronics" }
];

const filterElectronics = filterByCategory(products);
console.log(filterElectronics("Electronics")); // [{ name: "Laptop", category: "Electronics" }, { name: "Smartphone", category: "Electronics" }]

