// Main Library where book data is stored
const Library = [];

// The book constructor
function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
};

// Function that adds book to library array
function addBookToLibrary(){

};

// Handles pop up form opening and closing
document.addEventListener('DOMContentLoaded', function () {
    const newBook = document.getElementById('newBook');
    const closeFormButton = document.getElementById('closeForm');
    const overlay = document.getElementById('overlay');

    // Makes form appear
    newBook.addEventListener('click', function () {
        overlay.style.display = 'flex';
    });
    // Makes form non visible
    closeFormButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});
