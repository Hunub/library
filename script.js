const myLibrary=[];
const library = document.getElementById("library");
function Book(title,author,read){
    this.title = title;
    this.author = author;
    this.read = readOrNot(read);

};

function creatNewBook(){
    event.preventDefault();

    let i= myLibrary.length;

    myLibrary[i] = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.querySelector("input[name='state']:checked").value
    )

    console.log(myLibrary);
    console.log(myLibrary[i]);
    
};

function readOrNot(value){
    return value==="1"? true: false;
}

function toggleReadOrNot(i){
};

function deleteBook(i){
}

const button = document.getElementById('create');

button.addEventListener("click", creatNewBook);