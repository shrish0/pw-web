function arrangeBooksAlphabetically(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles.sort());
}

function logTitles(titles) {
    console.log(titles);
}

// Example usage
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

arrangeBooksAlphabetically(books, logTitles); 
// Output: [ '1984', 'The Great Gatsby', 'To Kill a Mockingbird' ]
