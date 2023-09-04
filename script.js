const gridArea = document.getElementById("bookGridArea");
const form = document.getElementById('bookSubmitForm');

//variables for the modal
var modal = document.getElementById("modalArea");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];


myLibrary = [];
function Book(title, author, pages, hasRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

//checks if a book title exists
function bookTitleExists(checkTitle){
    let checkBoolean = false;
    myLibrary.forEach((item) => {
        if(item.title == checkTitle){
            checkBoolean = true;
            
        }
    })
    return checkBoolean;
//resets the book grid. called after updating library item properties
}
function resetBookGrid(){
    gridArea.innerHTML = '';
}

function removeBookFromGrid(e) {
    let currentTitle = e.target.parentNode.firstChild.innerText;
    removeBookFromLibrary(currentTitle);
}

function addAllBooksToGrid(){
    myLibrary.forEach((item) => {
        let box = document.createElement('div');
        box.setAttribute("class", "bookGridItem");
        let author = document.createElement('div');
        let title = document.createElement('div');
        let pages = document.createElement('div');
        let isRead = document.createElement('div');
        let isReadCheckBox = document.createElement('input');
        let deleteButton = document.createElement('button');  
        author.setAttribute("class", "bookGridItemIndividual");
        title.setAttribute("class", "bookGridItemIndividual");
        pages.setAttribute("class", "bookGridItemIndividual");
        isRead.setAttribute("class", "bookGridItemIndividual");
        isReadCheckBox.setAttribute("class", "bookGridItemIndividual");
        isReadCheckBox.type = "checkbox";
        // deleteButton.setAttribute("class", "bookGridItemIndividual");
        author.textContent += item.author;
        title.textContent +=item.title;
        isRead.textContent +=item.hasRead;
        pages.textContent +=item.pages;
        deleteButton.textContent += "DeleteButton";
        deleteButton.onclick = removeBookFromGrid;

        if(item.hasRead){
            isReadCheckBox.checked = true;
        }
        else{
            isReadCheckBox.checked = false;
        }
        
        isReadCheckBox.onclick = checkBoxUpdate;
        box.appendChild(title);
        box.appendChild(author);
        box.appendChild(pages);
        // box.appendChild(isRead);
        box.appendChild(isReadCheckBox);
        box.appendChild(deleteButton);

        gridArea.appendChild(box);
    })
}

function addBookToLibrary(newTitle, newAuthor,newPages, newRead){
    if(!bookTitleExists(newTitle)){
        const newBook = new Book(newTitle, newAuthor, newPages, newRead);
        myLibrary.push(newBook);
        resetBookGrid();
        addAllBooksToGrid();
    }
    else{
        console.log("this book exists");
    }

    
}



function removeBookFromLibrary(removeTitle){
    if(bookTitleExists(removeTitle)){
        myLibrary = myLibrary.filter((item) => item.title != removeTitle)
        resetBookGrid();
        addAllBooksToGrid();
    }
    

}

function checkBoxUpdate(e){
    let currentTitle = e.target.parentNode.firstChild.innerText;
    myLibrary.forEach((item) => {
        if(item.title == currentTitle){

            let currentBoolean = item.hasRead;
            if(currentBoolean == true){
                item.hasRead = false;
                console.log("hasRead changed to false");
            }
            else{
                item.hasRead = true;
                console.log("hasRead changed to true");
            }
            // console.log(item.hasRead);
            console.log(myLibrary);
        }
    })

}


//just a test function
function testConsole(){
    console.log("checkbox triggered");
}

//codes for the modal functionality

//when user clicks button, opens the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// when user clicks on the span element, it closes the modal

span.onclick = function() {
    modal.style.display = "none";
}
//when user clicks anywhere outside the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//codes for the form submit

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value 
    const bookAuthor = document.getElementById('bookAuthor').value 
    const bookPages = document.getElementById('bookPages').value 
    const bookHasRead = document.getElementById('bookHasRead').checked

    if(bookTitleExists(bookTitle)){
        bookTitle
    }
    else{
        addBookToLibrary(bookTitle,bookAuthor,bookPages,bookHasRead);
        modal.style.display = "none";
        form.reset();
    }

   
})


// watch this to tidy up form validation and styling

// https://www.youtube.com/watch?v=CYlNJpltjMM&ab_channel=JavaScriptAcademy



//this works!
// myLibrary.map(console.log("hee") )
addBookToLibrary("Harry Potter", "JK Rowling", 500, true);
addBookToLibrary("Supar", "Hielo", 30, false);
addBookToLibrary("Coo", "hhh", 30, false);
addBookToLibrary("Shieeyyy", "hhh", 30, true);
addBookToLibrary("SHeesh", "hhh", 30, true);
removeBookFromLibrary("SHeesh");
console.log(myLibrary)

