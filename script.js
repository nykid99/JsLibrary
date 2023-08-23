const gridArea = document.getElementById("bookGridArea");

myLibrary = []
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

function addBookToLibrary(newTitle, newAuthor,newPages, newRead){
    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
}
// function addBookToBoard(){
//     myLibrary.forEach((item) => {

//     })
// }


function removeItemFromLibrary(removeTitle){
    if(bookTitleExists(removeTitle)){
        myLibrary = myLibrary.filter((item) => item.title != removeTitle)
    }
}
//this works!
// myLibrary.map(console.log("hee") )
addBookToLibrary("Harry Potter", "JK Rowling", 500, true)
addBookToLibrary("Supar", "Hielo", 30, false)
addBookToLibrary("Coo", "hhh", 30, false)
addBookToLibrary("Shieeyyy", "hhh", 30, true)


removeItemFromLibrary("Supar")
console.log(myLibrary)

//with above codes, I can add books and remove them using titles. Duplicate titles will not be allowed with something like this.