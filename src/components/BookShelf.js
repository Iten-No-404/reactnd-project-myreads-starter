import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
    return (                 
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          props.books.map( (mybook) => (<li>
              <Book id={mybook.id} title={mybook.title} author={mybook.author} coverURL={mybook.coverURL} />
            </li>
          ))
        }
        {/* <li>
          <Book id='1' title="1776" author="David McCullough" coverURL="http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"/>
        </li> */}
      </ol>
    </div>
  </div> );
}
 
export default BookShelf;