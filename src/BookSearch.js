import React, { Component } from 'react'
import BookDetails from './BookDetails'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'

class BookSearch extends Component {
  state = {
    searchText: '',
    books: [],
    notFound: false
  }

  updateSearchText = searchText => {
    this.setState({ searchText })
    if (!searchText  || (searchText === '')) {
      this.setState({
        books: []
      })
    } else {
      BooksAPI.search(searchText)
      .then(books => {
        books.map(book => { 
          book.shelf = 'none';                 
          this.props.myBooks.forEach(myBook => {          
            book.id===myBook.id && (book.shelf = myBook.shelf)            
          });
        })
        this.setState({
          books: books,
          notFound: false
        })
      })
      .catch(error => {
        this.setState({
          books: [],
          notFound: true
        })
        console.error(`Search error: ${error}`)
      })
    }
  }

  render() {
    const {searchText, notFound, books}  = this.state
    const {onUpdateShelf}  = this.props
    let displayResults;

    if (notFound === true) {
      displayResults = <span className="search-books-results"> No results found. Change your search and try again</span>
    } else {
      displayResults = books.map(book => (<BookDetails book={book} onUpdateShelf={onUpdateShelf} key={book.id}/>))
    }
    return (
      <div>
      <div className="back-image">
          <Link
            to="/"
            className="close-search">
            Back
          </Link>
      </div><br/>
      <div className="search-book-wrapper">
          <input
            type="text" className="search-book"
            placeholder="Search by title or author"
            value={searchText}
            onChange={event => this.updateSearchText(event.target.value)}>
          </input>
      </div>  
      <div className="bookshelf-title">Results for: {this.state.searchText}</div>
      
      <div className="shelf-title">
          <ol className="books-grid">         
            {displayResults}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
