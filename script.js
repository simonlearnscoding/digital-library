let myLibrary = [];

let x = 0
let counter = 0

function Book(title, author, pages, date, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.date = date
    this.id = x
    this.read = read
    
    x++
    // the constructor...
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
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
submitButton.addEventListener( 'click', closePopUp);




function showBooks() {
    //loop through every book and display them in some sort of table
    let libcont = document.getElementById('library')
    libcont.innerHTML = ''
    for (bookitem of myLibrary) {

        createBookElement(bookitem)
    }
}

function slider(checkbox) {
    if (checkbox === false) {
        return ""
    }
    return "checked"
}
function displayForm() {
 Form.classList.add("open-popup");
}
function closePopUp() {
    if (form.checkValidity() === false) {
        return;
    }
    Form.classList.remove("open-popup");
}
 checkFormValidity()
 function checkFormValidity() {
    const form =Object.assign({}, formHtmlGetter())
     
     for (const formKey in form) {
          checkValidity(form[formKey])
          setMessage(form[formKey])
     }
 }
  function formHtmlGetter() {
      object = {}
      object.title = document.getElementById('Title')
      object.author = document.getElementById("Author")
      object.pages = document.getElementById("nOfPages")
      object.date = document.getElementById("Date")
      return object
  }
   function checkValidity(element) {
        element.addEventListener("input", () => {
            //by default the validity object returns false when a custom validity message is shown so I set the string to empty as a woks round
            element.setCustomValidity(""); 
            element.checkValidity();
        })
   }
    function setMessage(element) {
        const messages = {
             Title: "please add a book title",
             Author: "please add an author to this book",
             nOfPages: "please add a number of pages",
             Date: "please add the release year of this book"
        }
        element.addEventListener("invalid", () => {
             element.setCustomValidity(messages[element.id])
        })
    }
function deleteElement(id) {
    myLibrary = myLibrary.filter(function( obj ) {
        return obj.id !== id;
    });
    console.log(myLibrary);
    showBooks();
}

let switchBool = false
function switchRead(Book) {
    if (switchBool === true) {
        switchBool = false;
        return;
    }
    switchBool = true;
    let selector = `book${Book.id}`
    counter ++;
    console.log(counter);
    let selectedBook = document.getElementById(selector)
    console.log(selectedBook)
    if (Book.read === false) {
        Book.read = true;
        selectedBook.classList.add('isread');
        console.log(selectedBook.classList)
        return
    }
    Book.read = false;
    selectedBook.classList.remove('isread')
}
function createBookElement(Book) {

    //create element
    let library = document.getElementById('library')
    let bookelement = document.createElement('div')
    bookelement.classList.add('book')


    bookelement.id = `book${Book.id}`;
    library.appendChild(bookelement)


    let title = document.createElement('div')
    title.classList.add('title')
    title.innerText = Book.title


    let cross = document.createElement('div')
    cross.classList.add('x')
    cross.innerHTML= "<img class=\"cross\" src=\"icons/close_FILL0_wght400_GRAD0_opsz48.svg\" alt=\"delete\">"
    
    cross.addEventListener('click',     function() {
        deleteElement(Book.id)});
    let author = document.createElement('div');
    author.classList.add('author');
    author.innerText = Book.author;

    let year = document.createElement('div');
    year.classList.add('year');
    year.innerText = Book.date;

    let pages = document.createElement('div');
    pages.classList.add('page-numbers');
    pages.innerText = Book.pages;
    
    let checked = slider(Book.read);
    let switchslider = document.createElement('div')
    switchslider.classList.add('switch')
    switchslider.innerHTML = "<label class=\"switch\">\n" +
        `                    <input type=\"checkbox\" ${checked}>\n ` + 
        "                    <span class=\"slider round\"></span>\n" +
        "                </label>"

    
    switchslider.addEventListener('click',     function() {
        switchRead(Book)});


    
    bookelement.appendChild(title)
    bookelement.appendChild(cross)
    bookelement.appendChild(author)
    bookelement.appendChild(year)
    bookelement.appendChild(pages)
    bookelement.appendChild(switchslider)

    if (Book.read === true) {
        bookelement.classList.add('isread');
        let child = switchslider.querySelector("input");
        console.log(child);
        child.checked = true;

    }

}

function handleSubmit(event) {
    const data = new FormData(event.target);
    event.preventDefault();
    
    let title = data.get('Title');
    let author = data.get('Author');
    let pages = data.get('n-pages');
    let date = data.get('Date');
    

    
    let read = document.querySelector('.read').checked;

    // var checkValue = document.getElementById("read").checked;

    let book = new Book(title, author, pages, date, read);
    console.log(book);
    addBookToLibrary(book);
    showBooks();
    form.reset();

}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);