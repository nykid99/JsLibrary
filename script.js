const gridArea = document.getElementById("bookGridArea");
myLibrary = [];
function Book(title, author, pages, hasRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}


function bookTitleExists(checkTitle){
    let checkBoolean = false;
    myLibrary.forEach((item) => {
        if(item.title == checkTitle){
            checkBoolean = true;
            
        }
    })
    return checkBoolean;

}

function resetBookGrid(){
    gridArea.innerHTML = '';
}

function addAllBooksToGrid(){
    myLibrary.forEach((item) => {
        let box = document.createElement('div');
        box.setAttribute("class", "bookGridItem");
        let author = document.createElement('div');
        let title = document.createElement('div');
        let pages = document.createElement('div');
        let isRead = document.createElement('div');
        author.setAttribute("class", "bookGridItemIndividual");
        title.setAttribute("class", "bookGridItemIndividual");
        pages.setAttribute("class", "bookGridItemIndividual");
        isRead.setAttribute("class", "bookGridItemIndividual");
        author.textContent += item.author;
        title.textContent +=item.title;
        isRead.textContent +=item.hasRead;
        pages.textContent +=item.pages;
        box.appendChild(title);
        box.appendChild(author);
        box.appendChild(pages);
        box.appendChild(isRead);

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

// function addBookToBoard(){
//     myLibrary.forEach((item) => {

//     })
// }


function removeBookFromLibrary(removeTitle){
    if(bookTitleExists(removeTitle)){
        myLibrary = myLibrary.filter((item) => item.title != removeTitle)
        resetBookGrid();
        addAllBooksToGrid();
    }
    

}
//this works!
// myLibrary.map(console.log("hee") )
addBookToLibrary("Harry Potter", "JK Rowling", 500, true);
addBookToLibrary("Supar", "Hielo", 30, false);
addBookToLibrary("Coo", "hhh", 30, false);
addBookToLibrary("Shieeyyy", "hhh", 30, true);
addBookToLibrary("SHeesh", "hhh", 30, true);
removeBookFromLibrary("SHeesh");
console.log(myLibrary)

//with above codes, I can add books and remove them using titles. 
//Duplicate titles will not be allowed with something like this.