import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booklists: {
        currentlyReadingbooks: [],
        wantToReadbooks: [],
        readbooks: [],
      }
    }
    BooksAPI.getAll().then((result) => {
      for(var i=0; i< result.length; i++)
      {
        const myBook = {
          "id": result[i].id,
          "title": result[i].title,
          "author": result[i].authors.join(', '),
          "coverURL": result[i].imageLinks.thumbnail
            };
        if(result[i].shelf === "currentlyReading")
          this.addToCurrentlyReading(myBook);
        else if(result[i].shelf === "wantToRead")
          this.addTowantToRead(myBook);
        else if(result[i].shelf === "read")
          this.addToread(myBook);
      }
  });
  }

    addToCurrentlyReading = (book) => {
      // Repeation Check:
      if(this.state.booklists.currentlyReadingbooks.some(b => b.id === book.id) === false)
      {
        this.setState((currentState) => ({
          ...currentState,
          booklists : {
            ...currentState.booklists,
            currentlyReadingbooks: [...currentState.booklists.currentlyReadingbooks, book],
          }
        }))
        BooksAPI.update(book,"currentlyReading");
      }
    }
    addTowantToRead = (book) => {
      // Repeation Check:
      if(this.state.booklists.wantToReadbooks.some(b => b.id === book.id) === false)
      {
        this.setState((currentState) => ({
          ...currentState,
          booklists : {
            ...currentState.booklists,
            wantToReadbooks: [...currentState.booklists.wantToReadbooks, book],
          }
        }))
        BooksAPI.update(book,"wantToRead");
      }
    }
    addToread = (book) => {
      // Repeation Check:
      if(this.state.booklists.readbooks.some(b => b.id === book.id) === false)
      {
        this.setState((currentState) => ({
          ...currentState,
          booklists : {
            ...currentState.booklists,
            readbooks: [...currentState.booklists.readbooks, book],
          }
        }))
        BooksAPI.update(book,"read");
      }
    }
    rmFromBooklists = (book) => {
      if(this.state.booklists.currentlyReadingbooks.some(b => b.id === book.id) === true)
      {
        this.setState((currentState) => ({
          ...currentState,
          booklists : {
            ...currentState.booklists,
            currentlyReadingbooks: currentState.booklists.currentlyReadingbooks.filter(b => b.id !== book.id),
          }
        }))
      } else if(this.state.booklists.wantToReadbooks.some(b => b.id === book.id) === true)
      {
        this.setState((currentState) => ({
          ...currentState,
          booklists : {
            ...currentState.booklists,
            wantToReadbooks: currentState.booklists.wantToReadbooks.filter(b => b.id !== book.id),
          }
        }))
      } else if(this.state.booklists.readbooks.some(b => b.id === book.id) === true)
      {
        this.setState((currentState) => ({
          ...currentState,
          booklists : {
            ...currentState.booklists,
            readbooks: currentState.booklists.readbooks.filter(b => b.id !== book.id),
          }
        }))
      }
      BooksAPI.update(book,"none");
    }
    checklist = (bookid) => {
      if(this.state.booklists.currentlyReadingbooks.some(b => b.id === bookid) === true)
        return "currentlyReading";
      else if(this.state.booklists.wantToReadbooks.some(b => b.id === bookid) === true)
        return "wantToRead";
      else if(this.state.booklists.readbooks.some(b => b.id === bookid) === true)
        return "read";
      else
        return "none";
    }
    addrm_fns = [
      this.rmFromBooklists,
      this.addToCurrentlyReading ,
      this.addTowantToRead,
      this.addToread,
      this.checklist
    ];
  render(){
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage booksList={this.state.booklists} addrmfns={ this.addrm_fns } />} />
          <Route exact path="/search" element={<SearchPage booksList={this.state.booklists} addrmfns={ this.addrm_fns } />}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
