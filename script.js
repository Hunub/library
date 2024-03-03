const myLibrary=[];

function Book(title){
    this.title = title;
};

function creatNewBook(){
    event.preventDefault();

    let i= myLibrary.length;

    myLibrary[i] = new Book(
        document.getElementById("title").value
    )

    console.log(myLibrary);
    console.log(myLibrary[0]);
    
};

function toggleReadOrNot(i){
};

function deleteBook(i){
}

const button = document.getElementById('create');

button.addEventListener("click", creatNewBook);