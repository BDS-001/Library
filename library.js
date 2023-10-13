const myLibrary = [];

function Book(author, title, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(event) {
  event.preventDefault()

  const title = document.querySelector('#book-title').value
  const author = document.querySelector('#book-title').value
  const pageCount = document.querySelector('#book-pages').value
  const read = document.querySelector('input[type = radio]:checked');
  if (read === null) {
    console.log('it is null')
    return
  }
  const newBook = new Book(title, author, pageCount, read.value)
  myLibrary.push(newBook)

  closeBookForm()
  refreshLibrary()
}

function cancelForm(event) {
  event.preventDefault()
  closeBookForm();
}

function clearTable() {
  const clear = document.querySelectorAll('.book')
  clear.forEach(book => {
    book.remove()
  });
}

function toggleRead(event) {
  const index = event.target.getAttribute('data-index');
  const currentRead = myLibrary[index].read
  if (currentRead === 'no') {
    myLibrary[index].read = 'yes'
  } else {
    myLibrary[index].read = 'no'
  }
  refreshLibrary()
}

function displayLibrary() {
  const library = document.querySelector('#library')
  for(let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]
    const row = document.createElement('tr')
    row.className = 'book'
    const bookInfo = Object.keys(book)
  

    bookInfo.forEach(bookKey => {
      let bookData = document.createElement('td')
      bookData.className = bookKey
      bookData.innerHTML = book[bookKey]
      if (bookKey === 'read') {
        const readToggle = document.createElement('button')
        readToggle.dataset.index = i
        readToggle.innerHTML = 'Toggle'
        readToggle.addEventListener('click', toggleRead)
        bookData.appendChild(readToggle)
      }
      row.append(bookData)
    });

    const removeBookButtonCol = document.createElement('td')
    removeBookButtonCol.className = 'remove-book'
    const removeBookButton = document.createElement('button')
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


function openBookForm() {
  const bookForm = document.querySelector('#add-book')
  bookForm.style.display = '';
}

function closeBookForm() {
  const bookForm = document.querySelector('#add-book')
  bookForm.reset()
  bookForm.style.display = 'none';
}

function addBookEventListener() {
  const addButton = document.querySelector('.add-button')
  addButton.addEventListener('click', openBookForm)
}

function submitFormEventListener() {
  const submit = document.querySelector('#submit')
  submit.addEventListener('click', addBookToLibrary)
}

function cancelFormEventListener() {
  const cancel = document.querySelector('#cancel')
  cancel.addEventListener('click', cancelForm)
}

function main() {
  addBookEventListener()
  closeBookForm()
  displayLibrary()
  submitFormEventListener()
  cancelFormEventListener()
}





// testing
let tmp = new Book('Dr. Seuss', 'The Cat in the Hat', 61, 'no')
myLibrary.push(tmp)
tmp = new Book('J. K. Rowling', 'Harry Potter and the Goblet of Fire', 746, 'yes')
myLibrary.push(tmp)
main()