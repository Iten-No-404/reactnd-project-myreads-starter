import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/search" element={<SearchPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
