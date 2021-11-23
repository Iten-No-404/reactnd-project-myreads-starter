import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from './components/BookShelf';

const SearchPage = (props) => {
  const [results, setResults] = useState([]);
    return (
        <div className="search-books">
        <div className="search-books-bar">
      		<Link to="/">
          		<button className="close-search">Close</button>
      		</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" onChange={(e) => {
              BooksAPI.search(e.target.value).then( (result) =>
              {
                if(result != null)
                  {
                var results_mod = [];
                if(Array.isArray(result))
                {
                  for(var i=0; i< result.length; i++)
                  {
                    results_mod.push({
                      "id": result[i].id,
                      "title": result[i].title,
                      "author": (Array.isArray(result[i].authors)) ? result[i].authors.join(', '): result[i].authors,
                      "coverURL": (typeof result[i].imageLinks !== "undefined" && result[i].imageLinks.thumbnail !== null)? result[i].imageLinks.thumbnail: ""
                        });
                  }
                }
                setResults(results_mod);
                  }
                  else
                  setResults([]);
              }, () => setResults([])).catch(() => setResults([]));
            }} placeholder="Search by title or author"/>

          </div>
        </div>
        <div id="search-results" className="search-books-results">
          <BookShelf key="0" shelfTitle=" " books={results} addrmfns={ props.addrmfns }/>
        </div>
      </div>
    )
}

export default SearchPage;
