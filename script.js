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

    renderLibrary(myLibrary);
}
function renderLibrary(array){
    library.innerHTML="";
    let l = array.length;
    for(i=0; i<l; i++){
        renderBook(i);
    }
}
function renderBook(i){

    const bookContainer = document.createElement("div");
    bookContainer.setAttribute('class','book_container');
    bookContainer.setAttribute('index',`${i}`);
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
    deleteBtn.addEventListener("click", deleteBook);
    bookContainer.appendChild(deleteBtn);
    
};

function readToBoolean(value){
    return value==="I have read the book"? true: false;
}

function deleteBook(event){
    let i = event.target.parentNode.getAttribute("index");
    myLibrary.splice(i,1);

    renderLibrary(myLibrary);
};


const button = document.getElementById('create');

button.addEventListener("click", creatNewBook);