import React, { Component } from 'react'
import { Route }  from 'react-router-dom'
import BookList from './BookList'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI.js'
import './styles/App.css'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books
      })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update({id: book.id}, shelf)
    .then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Books</h1>
        </div>
        <Route exact path="/" render = {() => (
          <BookList
            onUpdateShelf={this.updateShelf}
            books={this.state.books}
          />        
        )}/>
        <Route path="/search" render = {() => (
          <BookSearch
            onUpdateShelf={this.updateShelf}
            myBooks={this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default App;
