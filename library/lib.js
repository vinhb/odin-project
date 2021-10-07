// create constructor for Book objects
// books should have title, author, and pages, read boolean function that reports
// 'The Hobbit by J.R.R. Tolkien, 295 pages, not read yet'


let library = ['BookA', 'BookB'];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} long, ${read ? 'read':'not read yet'}`;
    }
}

function addBookToLibrary() {
    const book = prompt('Hello, what book would you like to add to the library?');
    library.push(book);
}

const div = document.createElement('div');
const bookTable = document.createElement('table');
const documentBody = document.querySelector('body');
const addBookButton = document.querySelector('button');

div.appendChild(bookTable);
documentBody.appendChild(div);

addBookButton.addEventListener('click', () => {
    const lineBreak = document.createElement('br');

    const bookForm = document.createElement('form');
    bookForm.setAttribute('name', 'Book Info Form');
    bookForm.setAttribute('action', 'submit');
    

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('bookTitle','title');
    titleInput.setAttribute('placeholder','Title');


    const authorInput = document.createElement('input');
    authorInput.setAttribute('type','text');
    authorInput.setAttribute('authorName','name');
    authorInput.setAttribute('placeholder','Author Name');

    const pageCountInput = document.createElement('input');
    pageCountInput.setAttribute('type','text');
    pageCountInput.setAttribute('pageCount','pages');
    pageCountInput.setAttribute('placeholder','Pages');

    const readTrue = document.createElement('input');
    readTrue.setAttribute('type','radio');
    readTrue.setAttribute('id','True');
    readTrue.setAttribute('value','Read');
    const readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'True')
    readLabel.innerText = 'Read'

    const readFalse = document.createElement('input');
    readFalse.setAttribute('type','radio');
    readFalse.setAttribute('id','False');
    readFalse.setAttribute('value','Not read');
    const notReadLabel = document.createElement('label');
    notReadLabel.setAttribute('for', 'False')
    notReadLabel.innerText = 'Not read'

    const submitButton = document.createElement('butotn')

    bookForm.append(
        titleInput, 
        lineBreak.cloneNode(), 
        authorInput, 
        lineBreak.cloneNode(), 
        pageCountInput, 
        lineBreak.cloneNode(),
        readTrue, readLabel, 
        readFalse, notReadLabel
    );

    documentBody.appendChild(bookForm);
})

library.forEach(book => {
    const bookTableRow = document.createElement('tr');
    const bookTableHeader = document.createElement('th');
    const bookTableData = document.createElement('td');
    
    bookTableData.innerText = book;
    bookTableRow.appendChild(bookTableData);
    bookTable.appendChild(bookTableRow);
})


