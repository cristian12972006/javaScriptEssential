let books=[];

function addBocks(){
    const bookName= document.getElementById('bookName').value;
    const authorName= document.getElementById('authorName').value;
    const bookDescription=document.getElementById('bookDescription').value;
    const pagesNumber=document.getElementById('pagesNumber').value;

    if( bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book={
            name:bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber:pagesNumber

        };

        books.push(book);
        showBook();
        clearInputs();

    } else{
        alert("por favor, complete los campos correctamente");
    }

}

function showBook(){
    const  bookDisv= books.map((book,index) =>`<h1> Numero de libro${index+1}</h1>
    
    <p><strong>Nombre del libre:</strong> ${book.name}</p>
    <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripción del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Número de páginas:</strong> ${book.pagesNumber} página(s)</p>`
);
document.getElementById('books').innerHTML=bookDisv.join('');
    

}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}