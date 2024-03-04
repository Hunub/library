const myLibrary=[];
const library = document.getElementById("library");
function Book(title,author,read){
    this.title = title;
    this.author = author;
    this.read = readToBoolean(read);
};



function creatNewBook(){
    event.preventDefault();

    let i= myLibrary.length;
    let title_i = document.getElementById("title").value;
    let author_i = document.getElementById("author").value;
    let read_i = document.querySelector("input[name='state']:checked").value;

    myLibrary[i] = new Book(title_i,author_i,read_i)

    renderLibrary(i);
}

function renderLibrary(i){

    const bookContainer = document.createElement("div");
    bookContainer.setAttribute('class','book_container');
    library.appendChild(bookContainer);

    const bookTitle = document.createElement("h2");
    bookTitle.innerText = myLibrary[i].title;
    bookContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement("h4");
    bookAuthor.innerText = myLibrary[i].author;
    bookContainer.appendChild(bookAuthor);

    const bookRead = document.createElement("p");
    bookRead.innerText = myLibrary[i].read;
    bookContainer.appendChild(bookRead);

    const deleteBtn= document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", ()=>{console.log(myLibrary[i])});
    bookContainer.appendChild(deleteBtn);
    
};

function readToBoolean(value){
    return value==="I have read the book"? true: false;
}


const button = document.getElementById('create');

button.addEventListener("click", creatNewBook);