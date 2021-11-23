import React from 'react';
import './App.css';
import BookShelf from './components/BookShelf';

const Shelving = (props) =>
{
    var count = 1; 
    return (
        <div className="list-books-content">
            {/* <div>
            {
          (props && props.bookslists.length > 0) ?
          props.bookslists.map( (myshelf) => (
            <BookShelf key={count++} shelfTitle="Currently Reading" books={props.bookslists.currentlyReadingbooks}/>
          ))
          :<span></span>
        }
            
            </div> */}
        </div>
    )
}