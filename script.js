let myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary(Book) {
    return myLibrary.push(Book);
}



//Add a “NEW BOOK” button that
// brings up a form allowing users
// to input the details for the new
// book: author, title,
// number of pages,
// whether it’s been read and
// anything else you might want.

let Button = document.querySelector(".newBook");
let submitButton = document.querySelector(".button-sumbit");

let Form = document.querySelector(".input-form");
Button.addEventListener( 'click', displayForm);
submitButtonButton.addEventListener( 'click', closePopUp);




function showBooks() {
    //loop through every book and display them in some sort of table
    pass
}
function displayForm() {
 Form.classList.add("open-popup");
}
function closePopUp() {
    Form.classList.remove("open-popup");
}