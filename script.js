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
];

// Функция-конструктор, создающая объект книги

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.isRead = function(){
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
    p2.textContent = `${book.isRead()}`;

    const button = document.createElement("button");
    button.textContent = "x";
    button.classList.add("delete");
    button.setAttribute("id", `${myLibrary.indexOf(book)}`);

    div.append(h3, p1, p2, button);

    bookshelf.appendChild(div);

    deleteButton = document.querySelectorAll(".delete");
    bookStored = document.querySelectorAll(".book");
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

    const button = document.createElement("button");
    button.textContent = "x";
    button.classList.add("delete");
    button.setAttribute("id", `${myLibrary.indexOf(book)}`);

    div.append(h3, p1, p2, button);

    bookshelf.appendChild(div);
});

// Выбираю элементы сразу после их создания, чтобы обновились кнопки

let deleteButton = document.querySelectorAll(".delete");
let bookStored = document.querySelectorAll(".book");
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
}

