

class Book {
    constructor(title, author, genre, releaseyear, authorage,bookid, authorid, genreid, genreTwo){
        this.title = title;
        this.author = [author,authorage];
        this.genre = genre || genreTwo; 
        this.releaseyear = releaseyear;
        this.authorage = authorage;
        this.bookid = bookid;
        this.authorid = authorid;
        this.genreid = genreid;
    
    }
}

class UI { 
addBook(book){
    const list = document.getElementById('table__body');
    const row = document.createElement('tr');
    row.innerHTML = `

    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td>${book.releaseyear}</td>
    <td>${book.bookid}</td>
    <td>${book.authorid}</td>
    <td>${book.genreid}</td>
    <td><a href="" class="delete">X</a></td>
    `;
    list.appendChild(row);
    const change = () => {$('delete'.css('color', 'yellow'))}
}

clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('authorage').value = '';
    document.getElementById('releaseyear').value = '';
    document.getElementById('bookid').value = '';
    document.getElementById('authorid').value = '';
    document.getElementById('genreid').value = '';
    document.getElementById('genreTwo').value = '';
}

}

document.getElementById("books").addEventListener('submit', 
 function(e){
     // Get values 
    const title =  document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const authorage = document.getElementById('authorage').value;
    const releaseyear =  document.getElementById('releaseyear').value;
    const bookid = document.getElementById('bookid').value;
    const authorid = document.getElementById('authorid').value;
    const genreid =  document.getElementById('genreid').value;
    const genreTwo = document.getElementById('genreTwo').value;
    

    if(title === '' || author === '' || genre === '') {
        alert('Fill')
    } else {
           // Create book 
    const book = new Book(title, author, genre, releaseyear, authorage, bookid, authorid, genreid, genreTwo);
    // Create UI 
    const ui = new UI();
        ui.addBook(book);
 ui.clearFields();
    }

  e.preventDefault();
})