const myLibrary = [];

function Book(author, title, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

function clearTable() {
  const clear = document.querySelectorAll('.book')
  console.log(clear)
  clear.forEach(book => {
    book.remove()
  });
}

function displayLibrary() {
  const library = document.querySelector('#library')
  for(let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]
    const row = document.createElement('tr')
    row.className = 'book'
    const bookInfo = Object.values(book)
  

    bookInfo.forEach(bookInfo => {
      let bookData = document.createElement('td')
      bookData.innerHTML = bookInfo
      row.append(bookData)
    });

    let removeBookButtonCol = document.createElement('td')
    removeBookButtonCol.className = 'remove-book'
    let removeBookButton = document.createElement('button')
    removeBookButton.innerHTML = 'REMOVE'
    removeBookButton.className = 'remove'
    removeBookButton.dataset.index = i
    removeBookButton.addEventListener('click', removeBook)
    removeBookButtonCol.append(removeBookButton)
    row.append(removeBookButtonCol)

    library.append(row)
  };

}

function refreshLibrary() {
  clearTable()
  displayLibrary()
}

function removeBook(event) {
  const dataIndex = event.target.getAttribute('data-index');
  myLibrary.splice(dataIndex, 1)
  refreshLibrary();
}










// testing
let tmp = new Book('Dr. Seuss', 'The Cat in the Hat', 61, false)
myLibrary.push(tmp)
tmp = new Book('J. K. Rowling', 'Harry Potter and the Goblet of Fire', 746, true)
myLibrary.push(tmp)
displayLibrary()