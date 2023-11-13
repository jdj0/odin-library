// Main Library where book data is stored
const Library = [];

// The book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Function that adds book to library array
function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    let newBook = new Book(title, author, pages, read)
    Library.push(newBook);
    closeForm();
};

document.getElementById('bookForm').addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary()
});

function closeForm(){
    let bookForm = document.getElementById('bookForm')
    bookForm.reset();
    overlay.style.display = 'none';
}

// Handles pop up form opening and closing
document.addEventListener('DOMContentLoaded', function () {
    const newBook = document.getElementById('newBook');
    const closeFormButton = document.getElementById('closeForm');
    const overlay = document.getElementById('overlay');

    // Makes form visible
    newBook.addEventListener('click', function () {
        overlay.style.display = 'flex';
    });
    // Closes form
    closeFormButton.addEventListener('click', closeForm);
});
