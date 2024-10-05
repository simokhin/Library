const myLibrary = [
    {
        author: "Ф. М. Достоевский",
        title: "Братья Карамазовы",
        pages: 900,
        read: true,
    },
    {
        author: "Ф. М. Достоевский",
        title: "Идиот",
        pages: 640,
        read: true,
    }
];

function Book(){

};

function addBookToLibrary(){

};

const list = document.querySelector(".books");

myLibrary.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.author}, ${book.title}, ${book.pages}, ${book.read}`;
    list.appendChild(li);
})