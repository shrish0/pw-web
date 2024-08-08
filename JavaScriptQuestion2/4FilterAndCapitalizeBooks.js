const books = [
    { title: "Book 1", author: "john doe", year: 2008 },
    { title: "Book 2", author: "jane smith", year: 2012 },
    { title: "Book 3", author: "robert brown", year: 2015 }
];

const filterAndCapitalizeBooks = (books) => {
    return books.filter(book => book.year > 2010).map(book => {
        return {
            ...book,
            author: book.author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
        };
    });
};

const updatedBooks = filterAndCapitalizeBooks(books);
console.log(updatedBooks);

