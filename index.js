const bookList= document.querySelector("#book-list ul")

// delete books
bookList.addEventListener('click', (e)=>{
  if (e.target.className= 'delete'){
    const li= e.target.parentElement
    bookList.removeChild (li)
  }
})


const addBooks= document.forms['add-books']

fetch('http://localhost:3000/books')
.then(resp=>resp.json())
.then(renderData)

function renderData(books){
  books.forEach((book)=>{
    const myBooks= document.createElement ("li")

    const bookName= document.createElement ("span")
    bookName.innerText= book.Title
    bookName.classList.add ("name")

    const bookAuthor= document.createElement ("span")
    bookAuthor.innerText= book.Aurhor
    bookAuthor.classList.add ("author")

    const bookType= document.createElement ("span")
    bookType.innerText= book.Type
    bookType.classList.add ("type")

    const deleteBtn= document.createElement ("span")
    deleteBtn.innerText= ("Delete")
    deleteBtn.classList.add ("delete")

    myBooks.append(
      bookName,
      bookAuthor,
      bookType,
      deleteBtn,
    );
    bookList.appendChild(myBooks)
  })
}

const addButton = document.querySelector('#add-books .add');

addButton.addEventListener('submit', (e) => {
   e.preventDefault();
});



// addBooks.addEventListener('submit', (e)=>{
//   e.preventDefault();

//   const value= addBooks.querySelector('input[type= "text"]').value
   
//   // create elements
// const li= document.createElement ('li')
// const bookName= document.createElement ('span')
// const bookAuthor= document.createElement ('span')
// const bookGenre= document.createElement ('span')
// const deleteBtn= document.createElement ('span')


// // append to the Dom
// li.appendChild (bookName)
// li.appendChild (bookAuthor)
// li.appendChild (bookGenre)
//  li.appendChild (deleteBtn)

// deleteBtn.textContent= 'delete'
// bookName.textContent= value
// bookAuthor.textContent= value
// bookGenre,textContent= value

// bookName.classList.add('name')
// bookAuthor.classList.add('author')
// bookGenre.classList.add('genre')
//  deleteBtn.classList.add('delete')

// bookList.appendChild(li)


// })

