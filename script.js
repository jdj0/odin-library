// Main Library where book data is stored
const Library = [];

// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function renderLibrary() {
    let libraryDisplay = document.getElementById('library')
    libraryDisplay.innerHTML = '';
    for (let i = 0; i < Library.length; i++){
        let book = Library[i];
        let bookDisplay = document.createElement('div');
        bookDisplay.innerHTML = `
        <div class="book-card">
        <h3 class="title">${book.title}</h3>
        <p class="author">By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p class="read-status">${book.read ? 'Read' : 'Not Read'}</p>
        <button onclick='deleteBook(${i})'>Delete</button>
        </div>
        `;
        libraryDisplay.appendChild(bookDisplay)
    }
}

// Splices specified books from the Library array and re-renders the library
function deleteBook(index){
    Library.splice(index, 1);
    renderLibrary();
}

// Function that adds book to library array
function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    let newBook = new Book(title, author, pages, read)
    Library.push(newBook);
    closeForm();
    renderLibrary();
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
    // Makes form non-visible
    closeFormButton.addEventListener('click', closeForm);
});
