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


function Book(title,author,totalPage, currentPage){
    this.title = title;
    this.author = author;
    this.totalPage = totalPage;
    this.currentPage = currentPage;
    this.read = this.totalPage === this.currentPage? true: false;
};

function creatNewBook(event){
    event.preventDefault();

    let i= myLibrary.length;
    let title_i = document.getElementById("title").value;
    let author_i = document.getElementById("author").value;
    let totalPage_i = document.getElementById("total-page").value;
    let currentPage_i = document.getElementById("cur-page").value? document.getElementById("cur-page").value: "0";
    myLibrary[i] = new Book(title_i,author_i,totalPage_i,currentPage_i);

    renderLibrary(myLibrary);
};

function renderLibrary(array){
    library.innerHTML="";
    let l = array.length;
    for(i=0; i<l; i++){
        renderBook(i);
    };
    console.log(myLibrary);
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
    textContainer.setAttribute('class','text-container');
    bookContainer.appendChild(textContainer);

    const bookTitle = document.createElement("h2");
    bookTitle.setAttribute('class','book-title');
    bookTitle.innerText = myLibrary[i].title;
    textContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement("h4");
    bookAuthor.setAttribute('class','book-author');
    bookAuthor.innerText = myLibrary[i].author;
    textContainer.appendChild(bookAuthor);

    const curPageText = document.createElement("p");
    curPageText.setAttribute('class','book-cur-page');
    curPageText.innerText = myLibrary[i].currentPage;
    
    const totalPageText = document.createElement("p");
    totalPageText.setAttribute('class','book-total-page');

    const banner = document.createElement("h3");
    banner.setAttribute('class','book-banner');
    banner.innerText = "Finished";
    
    if(myLibrary[i].read === true){
        totalPageText.innerText = `Number of Pages: ${myLibrary[i].totalPage}`;
        textContainer.appendChild(totalPageText);
        bookContainer.appendChild(banner);

    }else{
        const pageNumber = document.createElement("div");
        pageNumber.setAttribute('class','page-container');
        const curPageInc = document.createElement("div");
        curPageInc.addEventListener("click", incrementPage);
        curPageInc.setAttribute('class','book-inc')
        const curPageDec = document.createElement("div");
        curPageDec.addEventListener("click", decrementPage);
        curPageDec.setAttribute('class','book-dec')

        const slash = document.createElement("p");
        slash.setAttribute('class','slash');
        slash.innerText = "/";
        
        totalPageText.innerText = myLibrary[i].totalPage;
        textContainer.appendChild(pageNumber);
        pageNumber.appendChild(curPageText);
        pageNumber.appendChild(curPageDec);
        pageNumber.appendChild(curPageInc);
        pageNumber.appendChild(slash);
        pageNumber.appendChild(totalPageText);
    };


    const deleteBtn= document.createElement("button");
    deleteBtn.setAttribute('class','book-delete');
    deleteBtn.innerHTML= '<span class="material-symbols-outlined">close</span>';
    deleteBtn.addEventListener("click", deleteBook);
    bookContainer.appendChild(deleteBtn);

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.setAttribute('class','book-read');
    toggleReadBtn.innerHTML= '<span class="material-symbols-outlined">check</span>';
    toggleReadBtn.addEventListener("click", toggleRead);
    bookContainer.appendChild(toggleReadBtn);
};

function readToBoolean(value){
    return value==="read"? true: false;
};

function toggleReadDisplay(item){
    return item.read ? "Read" : "Not read";
};

function incrementPage(event){
    let i = event.target.parentNode.parentNode.parentNode.getAttribute("index");
    if(myLibrary[i].currentPage > myLibrary[i].totalPage - 1){
        return;
    }else{
        myLibrary[i].currentPage++;
        event.target.parentNode.querySelector("p").innerText = myLibrary[i].currentPage;
    };
};

function decrementPage(event){
    let i = event.target.parentNode.parentNode.parentNode.getAttribute("index");
    if(myLibrary[i].currentPage < 1){
        return;
    }else{
        myLibrary[i].currentPage--;
        event.target.parentNode.querySelector("p").innerText = myLibrary[i].currentPage;
    };
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

myLibrary[0] =  new Book("Moby Dick","Herman Melville","210","210");
myLibrary[1] =  new Book("The Count of Monte Cristo","Alexandre Dumas","212","212");
myLibrary[2] =  new Book("Don Quixote","Miguel de Cervantes","130","21");
myLibrary[3] =  new Book("The Courage to be Disliked: The Japanese phenomenon that shows you how to free yourself, change your life and achieve real happiness","Ichiro Kishimi,Fumitake Koga","155","155");
myLibrary[4] =  new Book("Walden","Henry David Thoreau","178","12");
myLibrary[5] =  new Book("The Art of Loving","Erich Fromm","3","1");

renderLibrary(myLibrary);
