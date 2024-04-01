let myLibrary = [];
const booksContainer = document.getElementById("books");

let bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let titleElement = document.getElementById("title");
    let authorElement = document.getElementById("author");
    let pagesElement = document.getElementById("pages");
    let readElement = document.getElementById("read");

    let title = titleElement.value;
    let author = authorElement.value;
    let pages = parseInt(pagesElement.value);
    let read = readElement.checked;

    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayLibrary();
})

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        if (isRead == true){
            return `${title} by ${author}, ${pages} pages, read`;
        } else {
            return `${title} by ${author}, ${pages} pages, not yet read`;
        }
    }
    this.id;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    book.id = myLibrary.length;
}

function removeBookFromLibrary(book) {
    myLibrary = myLibrary.slice(book.id);
}

function displayLibrary() {
    clearLibrary()
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

        read.addEventListener("click", function(){
            if (thisBook.isRead == true) {
                thisBook.isRead = false;
                read.innerHTML = "No";
            } else {
                thisBook.isRead = true;
                read.innerHTML = "Yes";
            }
        })

        const deleteElement = document.createElement("p");
        deleteElement.innerHTML = "delete";
        bookDiv.appendChild(deleteElement);

        deleteElement.addEventListener("click", function(){
            bookDiv.remove();
            removeBookFromLibrary(thisBook);
        })
    }
}

function clearLibrary() {
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.lastChild);
    }
}
