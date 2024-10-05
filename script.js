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
    }
];

function Book(){

};

function addBookToLibrary(){

};

const bookshelf = document.querySelector(".list");

myLibrary.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book")

    const h3 = document.createElement("h3");
    h3.textContent = `${book.author} - ${book.title}`;
    div.appendChild(h3);

    const p1 = document.createElement("p");
    p1.textContent = `${book.pages} pages`;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = `${book.isRead()}`;
    div.appendChild(p2);

    const button = document.createElement("button");
    button.textContent = "x";
    div.appendChild(button);

    bookshelf.appendChild(div);
})