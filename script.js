let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function() {
        if (isRead == true){
            return `${title} by ${author}, ${pages} pages, read`
        } else {
            return `${title} by ${author}, ${pages} pages, not yet read`
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayLibrary() {
    const booksContainer = document.getElementById("books");

    for (let book in myLibrary) {
        const bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "book");
        booksContainer.appendChild(bookDiv);

        let thisBook = myLibrary[book];
    
        const title = document.createElement("p");
        title.innerHTML = thisBook.title;
        bookDiv.appendChild(title);
    
        const author = document.createElement("p");
        author.innerHTML = thisBook.author;
        bookDiv.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = thisBook.pages;
        bookDiv.appendChild(pages);

        const read = document.createElement("p");
        if (thisBook.isRead == true) {
            read.innerHTML = "Yes";
        } else if (thisBook.isRead == false) {
            read.innerHTML = "No";
        }
        bookDiv.appendChild(read);
    }
}

let myBook = new Book("title name", "author name", 200, true);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
displayLibrary()
