// Массив, в котором хранятся объекты книг

const myLibrary = [
    {
        author: "Ф. М. Достоевский",
        title: "Братья Карамазовы",
        pages: 900,
        read: true,
        isRead: function(){
            if (this.read){
                return "Read";
            }
            else {
                return "Not read";
            };
        }
    },
    {
        author: "Ф. М. Достоевский",
        title: "Идиот",
        pages: 640,
        read: true,
        isRead: function(){
            if (this.read){
                return "Read";
            }
            else {
                return "Not read";
            };
        }
    },

];

// Функция-конструктор, создающая объект книги

class Book {
    constructor(author, title, pages, read){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

    isRead = function(){
        if (this.read){
            return "Read";
        }
        else {
            return "Not read";
        };
    }
};

// Функция, добавляющая новый объект книги на страницу

function addBookToLibrary(book){
    const div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("id", `${myLibrary.indexOf(book)}`);

    const h3 = document.createElement("h3");
    h3.textContent = `${book.author} - ${book.title}`;

    const p1 = document.createElement("p");
    p1.textContent = `${book.pages} pages`;

    const p2 = document.createElement("p");
    p2.setAttribute("class", "ready-or-not");
    p2.textContent = `${book.isRead()}`;

    const button2 = document.createElement("button");
    button2.textContent = "status";
    button2.classList.add("changeStatus");
    button2.setAttribute("id", `${myLibrary.indexOf(book)}`);
    p2.setAttribute("id", `${myLibrary.indexOf(book)}`);

    const button = document.createElement("button");
    button.textContent = "x";
    button.classList.add("delete");
    button.setAttribute("id", `${myLibrary.indexOf(book)}`);

    div.append(h3, p1, p2, button2, button);

    bookshelf.appendChild(div);

    deleteButton = document.querySelectorAll(".delete");
    bookStored = document.querySelectorAll(".book");
    changeStatus = document.querySelectorAll(".changeStatus");
    updateButtons();
};

// Создаёт книжную полку на странице

const bookshelf = document.querySelector(".list");

myLibrary.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("id", `${myLibrary.indexOf(book)}`);

    const h3 = document.createElement("h3");
    h3.textContent = `${book.author} - ${book.title}`;

    const p1 = document.createElement("p");
    p1.textContent = `${book.pages} pages`;

    const p2 = document.createElement("p");
    p2.textContent = `${book.isRead()}`;
    p2.setAttribute("class", "ready-or-not");
    p2.setAttribute("id", `${myLibrary.indexOf(book)}`);

    const button2 = document.createElement("button");
    button2.textContent = "status";
    button2.classList.add("changeStatus");
    button2.setAttribute("id", `${myLibrary.indexOf(book)}`);

    const button = document.createElement("button");
    button.textContent = "x";
    button.classList.add("delete");
    button.setAttribute("id", `${myLibrary.indexOf(book)}`);

    div.append(h3, p1, p2, button2, button);

    bookshelf.appendChild(div);
});

// Выбираю элементы сразу после их создания, чтобы обновились кнопки

let deleteButton = document.querySelectorAll(".delete");
let bookStored = document.querySelectorAll(".book");
let changeStatus = document.querySelectorAll(".changeStatus");
updateButtons();

// Открывает и закрывает диалог

const addBookDialog = document.getElementById("add-book");
const addBookButton = document.getElementById("add-book-button");
const add = document.getElementById("add");
const closeButton = document.getElementById("close");

addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
})

closeButton.addEventListener('click', () => {
    addBookDialog.close();
})

// Берет данные из формы, создаёт объект книги, добавляет его в массив и добавляет на страницу

add.addEventListener('click', (event) => {
    const author = document.getElementById("author");
    const title = document.getElementById("title");
    const pages = document.getElementById("pages");
    const read = document.getAnimations("isRead")
    let isRead;
    if (read.value === "read"){
        isRead = true;
    }
    else {
        isRead = false
    }

    let book = new Book(author.value, title.value, pages.value, isRead);
    myLibrary.push(book);
    addBookToLibrary(book);
})

// Добавляют кнопке функцию удаления книги

function updateButtons(){
    deleteButton.forEach(function(button){
        button.addEventListener("click", () => {
            let id = button.id;
            bookStored[id].remove();
        })
    })
    changeStatus.forEach(function(button){
        button.addEventListener("click", () => {
            let id = button.id;
            if (myLibrary[id].read){
                myLibrary[id].read = false;
            }
            else {
                myLibrary[id].read = true;
            }
            let pages2 = document.querySelectorAll(".ready-or-not");
            console.log(pages2)
            pages2[id].textContent = `${myLibrary[id].isRead()}`
        })
    })
}

