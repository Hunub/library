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
    if(myLibrary[i].read === true){
        bookContainer.setAttribute('class','book-container complete');
    }else{
        bookContainer.setAttribute('class','book-container');
    };
    bookContainer.setAttribute('index',`${i}`);
    library.appendChild(bookContainer);

    const textContainer = document.createElement("div");
    bookContainer.appendChild(textContainer);

    const bookTitle = document.createElement("h2");
    bookTitle.setAttribute('class','book-title');
    bookTitle.innerText = myLibrary[i].title;
    textContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement("h4");
    bookAuthor.setAttribute('class','book-author');
    bookAuthor.innerText = myLibrary[i].author;
    textContainer.appendChild(bookAuthor);

    const deleteBtn= document.createElement("button");
    deleteBtn.setAttribute('class','book-delete');
    deleteBtn.innerHTML= '<span class="material-symbols-outlined">close</span>';
    deleteBtn.addEventListener("click", deleteBook);
    bookContainer.appendChild(deleteBtn);

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.setAttribute('class','book-read');
    toggleReadBtn.innerHTML= '<span class="material-symbols-outlined">check</span>';
    // toggleReadBtn.innerText = toggleReadDisplay(myLibrary[i]);
    toggleReadBtn.addEventListener("click", toggleRead);
    bookContainer.appendChild(toggleReadBtn);
};

function readToBoolean(value){
    return value==="read"? true: false;
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
    let parent = event.target.parentNode
    let i = parent.getAttribute("index");
    myLibrary[i].read === false?myLibrary[i].read = true:myLibrary[i].read = false;
    renderLibrary(myLibrary);
}

myLibrary[0] =  new Book("Moby Dick","Herman Melville","read");
myLibrary[1] =  new Book("The Count of Monte Cristo","Alexandre Dumas","read");
myLibrary[2] =  new Book("Don Quixote","Miguel de Cervantes","not-read");
myLibrary[3] =  new Book("The Courage to be Disliked: The Japanese phenomenon that shows you how to free yourself, change your life and achieve real happiness","Ichiro Kishimi,Fumitake Koga","read");
myLibrary[4] =  new Book("Walden","Henry David Thoreau","not-read");
myLibrary[5] =  new Book("The Art of Loving","Erich Fromm","not-read");

renderLibrary(myLibrary);
