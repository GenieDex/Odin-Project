const books = [
    {
        title: "Book 1",
        autor: "Name",
    },
    {
        title: "Book 2",
        autor: "Name",
    },
    {
        title: "Book 3",
        autor: "Name",
    },
    {
        title: "Book 4",
        autor: "Name",
    },
    {
        title: "Book 5",
        autor: "Name",
    }
]

function getTheTitles(books){
    const bookTitles = [];
    for (i = 0; i < books.length; i++){
        bookTitles.push(books[i].title)
    }
    return bookTitles;
}

console.log(getTheTitles(books));