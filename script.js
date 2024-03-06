const myLibrary=[];

const dialog = document.querySelector("dialog");
const addBtn = document.getElementById("add");
const closeBtn = document.getElementById('close');

const form = document.querySelector("form");
const createBtn = document.getElementById('create');

const library = document.getElementById("library");

addBtn.addEventListener("click", ()=>{
    dialog.showModal();
});

closeBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    dialog.close();
});

createBtn.addEventListener("click", creatNewBook);
createBtn.addEventListener("click", ()=>{
    dialog.close();
    form.reset();
});


function Book(title,author,read){
    this.title = title;
    this.author = author;
    this.read = readToBoolean(read);
};

function creatNewBook(event){
    event.preventDefault();

    let i= myLibrary.length;
    let title_i = document.getElementById("title").value;
    let author_i = document.getElementById("author").value;
    let read_i = document.querySelector("input[name='state']:checked").value;

    myLibrary[i] = new Book(title_i,author_i,read_i)

    renderLibrary(myLibrary);
};

function renderLibrary(array){
    library.innerHTML="";
    let l = array.length;
    for(i=0; i<l; i++){
        renderBook(i);
    };
};

function renderBook(i){

    const bookContainer = document.createElement("div");
    bookContainer.setAttribute('class','book-container');
    bookContainer.setAttribute('index',`${i}`);
    library.appendChild(bookContainer);

    const bookTitle = document.createElement("h2");
    bookTitle.setAttribute('class','book-title');
    bookTitle.innerText = myLibrary[i].title;
    bookContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement("h4");
    bookAuthor.setAttribute('class','book-author');
    bookAuthor.innerText = myLibrary[i].author;
    bookContainer.appendChild(bookAuthor);

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.setAttribute('class','book-read');
    toggleReadBtn.innerText = toggleReadDisplay(myLibrary[i]);
    toggleReadBtn.addEventListener("click", toggleRead);
    bookContainer.appendChild(toggleReadBtn);

    const deleteBtn= document.createElement("button");
    deleteBtn.setAttribute('class','book-delete');
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", deleteBook);
    bookContainer.appendChild(deleteBtn);
};

function readToBoolean(value){
    return value==="I have read the book"? true: false;
};

function toggleReadDisplay(item){
    return item.read ? "Read" : "Not read";
};

function deleteBook(event){
    let i = event.target.parentNode.getAttribute("index");
    myLibrary.splice(i,1);

    renderLibrary(myLibrary);
};

function toggleRead(event){
    let i = event.target.parentNode.getAttribute("index");
    myLibrary[i].read? myLibrary[i].read = false: myLibrary[i].read = true;

    renderLibrary(myLibrary);
}


