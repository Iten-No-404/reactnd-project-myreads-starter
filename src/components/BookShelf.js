import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  console.log("Shelf title: "+ props.shelfTitle);
  console.log(props.books);
    return (                 
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          (props && props.books.length > 0) ?
          props.books.map( (mybook) => (
          <li  key={mybook.id}>
            <Book id={mybook.id} title={mybook.title} author={mybook.author} coverURL={mybook.coverURL} addrmfns={ props.addrmfns } />
          </li>
          ))
          :<span></span>
        }
      </ol>
    </div>
  </div> );
}
 
export default BookShelf;