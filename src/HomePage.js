import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import BookShelf from './components/BookShelf';

const HomePage = (props) => {
 
  return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf key="1" shelfTitle="Currently Reading" books={props.booksList.currentlyReadingbooks} addrmfns={ props.addrmfns }/>
              <BookShelf key="2" shelfTitle="Want to Read" books={props.booksList.wantToReadbooks} addrmfns={ props.addrmfns }/>
              <BookShelf key="3" shelfTitle="Read" books={props.booksList.readbooks} addrmfns={ props.addrmfns } />
            </div>
          </div>
          <div className="open-search">
			<Link to="/search">
            	<button>Add a book</button>
			</Link>
          </div>
        </div>
    )
}

export default HomePage;
