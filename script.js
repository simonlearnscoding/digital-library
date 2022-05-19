let myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary(Book) {
    return myLibrary.push(Book);
}

function showBooks() {
    //loop through every book and display them in some sort of table

}

//Add a “NEW BOOK” button that
// brings up a form allowing users
// to input the details for the new
// book: author, title,
// number of pages,
// whether it’s been read and
// anything else you might want.

let button = document.querySelector(".newBook")
let Form = document.querySelector(".form-container")


button.addEventListener('click', displayForm);
function displayForm() {
    console.log(Form.classList);
Form.classList.add("deactivated");
}